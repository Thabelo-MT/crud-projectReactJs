<?php
// Avoid CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: applications/json; charset=UTF-8");

include('database.php');
$result=mysqli_query($con,"SELECT * FROM products");
$output="";
// Generate the data in json format
while($rs =mysqli_fetch_array($results)){
    if($output !="") {$output .=",";};
    $output .='{"id":"' .$rs["id"] . '",';
    $output .='{"Name":"' .$rs["Name"] . '",';
    $output .='{"Description":"' .$rs["Description"] . '",';
    $output .='{"Price":"' .$rs["Price"] . '",';
}
$output ='{"info":.['.$output. ']}';

echo($output);
?>