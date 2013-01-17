<?php

//function to validate the email address
//returns false if email is invalid
function checkEmail($email){
   
	if(eregi("^[a-zA-Z0-9_]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$]", $email)){
		return FALSE;
	}

	list($Username, $Domain) = split("@",$email);

	if(@getmxrr($Domain, $MXHost)){
		return TRUE;
   
	} else {
		if(@fsockopen($Domain, 25, $errno, $errstr, 30)){
			return TRUE; 
		} else {

			return FALSE; 
		}
	}
}	



//response array with status code and message
$response_array = array();

//validate the post form

//check the name field
if(empty($_POST['f_name'])){

	//set the response
	$response_array['status'] = 'error';
	$response_array['message'] = 'Looks like you forgot your first name. Please try that again.';

} elseif(empty($_POST['l_name'])){

	//set the response
	$response_array['status'] = 'error';
	$response_array['message'] = 'Looks like you forgot your last name. Please try that again.';

//check the email field
} elseif(!checkEmail($_POST['email'])) {

	//set the response
	$response_array['status'] = 'error';
	$response_array['message'] = 'Looks like you forgot your email address. Please try that again.';

//check the message field
} elseif(empty($_POST['message'])) {

	//set the response
	$response_array['status'] = 'error';
	$response_array['message'] = 'Looks like you forgot to type a message.';

//check the phone field
} elseif(empty($_POST['phone'])) {

	//set the response
	$response_array['status'] = 'error';
	$response_array['message'] = 'Looks like you forgot to leave a phone number.';


//form validated. send email
} else {
	
	//send the email
	$to = "roger@wulffelectricinc.com";
	$subject = "Web Contact Form";
	$message = $_POST['f_name'] . " " . $_POST['l_name'] . " sent you a message\n\n";
	$message .= "Details: " . $_POST['message'];
	$message .= "\n\n How to reach them: " . $_POST['email'] . " or " . $_POST['phone'];
	mail($to,$subject,$message); 

	//set the response
	$response_array['status'] = 'success';
	$response_array['message'] = 'Message sent!';

}


echo json_encode($response_array);

?>