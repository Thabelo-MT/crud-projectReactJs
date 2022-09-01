<?php
// Avoid CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: applications/json; charset=UTF-8");

include('database.php');
//Passing data using the json format
$data = json_decode(file_get_contents("php://input"));
$Name=$data->Name;
$Description=$data->Description;
$Price=$data->Price;
if ($Name && $Description && $Price){
	$sql ="INSERT INTO products(
		Name,
		Description,
		Price)
values(
'$Name',
'$Description',
'$Price')";
$results = mysqli_query($con,$sql);
if($result){
	$response=array(
		'status'=> 'valid');
	echo json_encode($response);
}
else{
	$response=array(
		'status'=> 'invalid');
	echo json_encode($response);
}
}
?>