<?php
// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Configuration
define('ADMIN_EMAIL', 'officesapp365@gmail.com');
define('SITE_NAME', 'RealitechGlobal');
define('MAX_MESSAGE_LENGTH', 5000);
define('RATE_LIMIT_ATTEMPTS', 5);
define('RATE_LIMIT_MINUTES', 60);

// Response handler
function sendResponse($success, $message) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

// Validate CSRF token
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    session_start();

    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        sendResponse(false, 'Security token validation failed.');
    }

    // Rate limiting
    $client_ip = $_SERVER['REMOTE_ADDR'];
    $rate_limit_key = 'contact_form_' . md5($client_ip);

    if (isset($_SESSION[$rate_limit_key])) {
        $attempts = $_SESSION[$rate_limit_key]['attempts'];
        $first_attempt = $_SESSION[$rate_limit_key]['time'];
        $time_passed = (time() - $first_attempt) / 60;

        if ($time_passed < RATE_LIMIT_MINUTES && $attempts >= RATE_LIMIT_ATTEMPTS) {
            sendResponse(false, 'Too many requests. Please try again later.');
        }

        if ($time_passed >= RATE_LIMIT_MINUTES) {
            $_SESSION[$rate_limit_key] = ['attempts' => 1, 'time' => time()];
        } else {
            $_SESSION[$rate_limit_key]['attempts']++;
        }
    } else {
        $_SESSION[$rate_limit_key] = ['attempts' => 1, 'time' => time()];
    }
}

// Generate CSRF token for GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    session_start();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    exit;
}

// Process POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate input
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    $errors = [];

    // Validation checks
    if (empty($name) || strlen($name) < 2) {
        $errors[] = 'Name must be at least 2 characters.';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address.';
    }

    if (empty($subject) || strlen($subject) < 3) {
        $errors[] = 'Subject must be at least 3 characters.';
    }

    if (empty($message) || strlen($message) < 5) {
        $errors[] = 'Message must be at least 5 characters.';
    }

    if (strlen($message) > MAX_MESSAGE_LENGTH) {
        $errors[] = 'Message is too long (max ' . MAX_MESSAGE_LENGTH . ' characters).';
    }

    if (!empty($errors)) {
        sendResponse(false, implode(' ', $errors));
    }

    // Sanitize inputs
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    // Prepare email headers (optimized for Namecheap)
    $to = ADMIN_EMAIL;
    $reply_to = $email;

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: noreply@" . getenv('HTTP_HOST') . "\r\n";
    $headers .= "Reply-To: " . $reply_to . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Prepare email body for admin
    $email_body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #007bff; color: white; padding: 10px; text-align: center; }
            .content { padding: 20px; border: 1px solid #ddd; }
            .footer { background: #f8f9fa; padding: 10px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <p><strong>Name:</strong> " . $name . "</p>
                <p><strong>Email:</strong> " . $email . "</p>
                <p><strong>Subject:</strong> " . $subject . "</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br($message) . "</p>
            </div>
            <div class='footer'>
                <p>Received from " . SITE_NAME . " contact form</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Send email to admin
    $admin_subject = "New Contact: " . $subject;
    $admin_sent = mail($to, $admin_subject, $email_body, $headers);

    if (!$admin_sent) {
        sendResponse(false, 'Failed to send email. Please try again later.');
    }

    // Send confirmation to user
    $user_headers = "MIME-Version: 1.0\r\n";
    $user_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $user_headers .= "From: noreply@" . getenv('HTTP_HOST') . "\r\n";

    $confirmation_body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #007bff; color: white; padding: 10px; text-align: center; }
            .content { padding: 20px; border: 1px solid #ddd; }
            .footer { background: #f8f9fa; padding: 10px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Thank You for Contacting Us</h2>
            </div>
            <div class='content'>
                <p>Dear " . $name . ",</p>
                <p>We have received your message and will get back to you as soon as possible.</p>
                <p><strong>Your Message Details:</strong></p>
                <p><strong>Subject:</strong> " . $subject . "</p>
                <p>Thank you for reaching out!</p>
            </div>
            <div class='footer'>
                <p>&copy; " . date('Y') . " " . SITE_NAME . ". All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    mail($email, "We Received Your Message", $confirmation_body, $user_headers);

    sendResponse(true, 'Thank you! Your message has been sent successfully. We will contact you soon.');
}

// Handle invalid requests
sendResponse(false, 'Invalid request method.');
?>
