<?php
/**
* Simple example script using PHPMailer with exceptions enabled
* @package phpmailer
* @version $Id$
*/

require '../class.phpmailer.php';
require '../class.smtp.php'; 

try {
	$mail = new PHPMailer(true); //New instance, with exceptions enabled

	$body             = file_get_contents('contents.html');
	$body             = preg_replace('/\\\\/','', $body); //Strip backslashes
	echo 'Message has been sent.';
	$mail->IsSMTP();                           // tell the class to use SMTP
	$mail->SMTPAuth   = true;                  // enable SMTP authentication
	$mail->Port       = 465;                    // set the SMTP server port
	$mail->Host       = "smtp.gmail.com"; // SMTP server
	$mail->Username   = "denisvarela@gmail.com";     // SMTP server username
	$mail->Password   = "blackberry2011";            // SMTP server password
	echo 'Message has been sent.';
	//$mail->IsSendmail();  // tell the class to use Sendmail
	echo 'Message has been sent.';
	$mail->AddReplyTo("hotman_luis@hotmail.com","Prueba");
echo 'Message has been sent.';
	$mail->From       = "denisvarela@gmail.com";
	$mail->FromName   = "Luis Denis";
echo 'Message has been sent.';
	$to = "luis-denis@hotmail.com";
echo 'Message has been sent.';
	$mail->AddAddress($to);
echo 'direccion';
	$mail->Subject  = "First PHPMailer Message";
echo 'contenido alternativo';
	$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
	$mail->WordWrap   = 80; // set word wrap
echo 'message html';
	$mail->MsgHTML($body);
echo 'ishtml.';
	$mail->IsHTML(true); // send as HTML
echo 'send';
	if(!$mail->Send())
	{
	echo "Mailer Error: " . $mail->ErrorInfo;
	}
	else
	{
	echo "Message has been sent";
	}
	echo ' before send';
	echo 'Message has been sent.';
} catch (phpmailerException $e) {
	echo $e->errorMessage();
}
?>