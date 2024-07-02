<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoload file
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';

// Initialize PHPMailer
$mail = new PHPMailer(true);

try {
    // SMTP settings for Outlook.com
    $mail->isSMTP();
    $mail->Host = 'smtp-mail.outlook.com'; // Outlook SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'analgiere@my.waketech.edu'; // Your full Outlook.com email address
    $mail->Password = 'Zy@_I|B4]]~2)M]g4kX8'; // Your Outlook.com app password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('analgiere@my.waketech.edu', 'Alexandria Algiere'); // Email and name of recipient

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = $_POST['message'];
    $mail->AltBody = 'Plain text version of the email content if HTML is not supported.';

    // Send email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
