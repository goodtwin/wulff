<?php
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
 
$to = 'greg@good-twin.com';
$subject = 'the subject';
$message = 'FROM: '.$f_name. $l_name.' Email: '.$email.'Phone: '.$phone.'Message: '.$comment;
$headers = 'From:' $email . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Your email was sent!"; // success message
}else{
echo "Invalid Email, please provide an correct email.";
}
?>