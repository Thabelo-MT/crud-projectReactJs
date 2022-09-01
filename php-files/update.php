<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: applications/json; charset=UTF-8");

include('database.php');

$data =json_decode(file_get_contents("php://input"));
$id = $data->id;
$Name = $data->Name;
$Description = $data->Description;
$Price = $data->Price;

$sql= "UPDATE products SET Name='$Name',Description='$Description',Price='$Price' WHERE id=$id";
$results= mysqli_query($con,$sql);

if($results){
	$response=array(
		'status'=>'valid');
	echo json_encode($response);
}
else{
	$response=array(
		'status'=>'invalid');
	echo json_encode($response);
}
?>