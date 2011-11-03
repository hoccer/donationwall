<?php

$payerName = $_POST["name"];
$payerEmail = $_POST["email"];
$invoiceUnitPrice = $_POST["amount"];
$invoiceDescription = $_POST["comment"];

//turn php errors on
ini_set("track_errors", true);
 
//set PayPal Endpoint to sandbox
$url = trim("https://svcs.sandbox.paypal.com/Invoice/CreateAndSendInvoice");
 
 
//PayPal API Credentials
$API_UserName = "test.user.hocc.com"; //TODO
$API_Password = "changeme!"; //TODO
$API_Signature = "changeme"; //TODO
 
//Default App ID for Sandbox	
$API_AppID = "changeme";
 
$API_RequestFormat = "NV";
$API_ResponseFormat = "JSON";

$merchantEmail = "your@email.com";
$currency = "USD";
$invoiceName = "Your Company";
$invoiceQuantity = "1";
$paymentTerms = "Net30";
$logoUrl = "https://domain.com/logo.gif";
 
$bodyparams = array (
				'requestEnvelope.errorLanguage'=>urlencode('en_US'),
				'invoice.merchantEmail'=>$merchantEmail,
				'invoice.payerEmail'=>$payerEmail,
				'invoice.currencyCode'=>urlencode($currency),
				'invoice.itemList.item(0).name'=>urlencode($invoiceName),
				'invoice.itemList.item(0).description'=>urlencode($invoiceDescription),
				'invoice.itemList.item(0).quantity'=>urlencode($invoiceQuantity),
				'invoice.itemList.item(0).unitPrice'=>urlencode($invoiceUnitPrice),
				'invoice.paymentTerms'=>urlencode($paymentTerms)
				);
 
// convert payload array into url encoded query string
$body_data = http_build_query($bodyparams, "", chr(38));
 
 
try
{
 
    //create request and add headers
    $params = array("http" => array( 
				 					 "method" => "POST",
									 "content" => $body_data,
									 "header" =>  "X-PAYPAL-SECURITY-USERID: " . $API_UserName . "\r\n" .
									 "X-PAYPAL-SECURITY-SIGNATURE: " . $API_Signature . "\r\n" .
									 "X-PAYPAL-SECURITY-PASSWORD: " . $API_Password . "\r\n" .
									 "X-PAYPAL-APPLICATION-ID: " . $API_AppID . "\r\n" .
									 "X-PAYPAL-REQUEST-DATA-FORMAT: " . $API_RequestFormat . "\r\n" .
									 "X-PAYPAL-RESPONSE-DATA-FORMAT: " . $API_ResponseFormat . "\r\n" 
									 ));
 
 
    //create stream context
     $ctx = stream_context_create($params);
 
 
    //open the stream and send request
     $fp = @fopen($url, "r", false, $ctx);
 
    //get response
  	 $response = stream_get_contents($fp);
 
  	//check to see if stream is open
     if ($response === false) {
        throw new Exception("php error message = " . "$php_errormsg");
     }
 
    //close the stream
     fclose($fp);
 
    //parse the ap key from the response
	
	echo($response);
   }
 
 
catch(Exception $e) {
  	echo "Message: ||" .$e->getMessage()."||";
}
 
?>