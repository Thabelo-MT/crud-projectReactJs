<?php
// Avoid CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: applications/json; charset=UTF-8");

$data =json_decode(file_get_contents("php://input"));
include('database.php');

$sql = "DELETE FROM products WHERE id='".$data->id."'";
$results =mysqli_query($con,$sql);

?>