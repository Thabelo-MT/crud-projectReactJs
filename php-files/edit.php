<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: applications/json; charset=UTF-8");

include('database.php');
$sql= "SELECT * FROM products WHERE id='".$_GET['id']."'";
$results= mysqli_query($con,$sql);
$output="";

// Generate the data in json format
while($rs =mysqli_fetch_array($results)){
    if($output !="") {$output .=",";};
    $output .='{"id":"' .$rs["id"] . '",';
    $output .='{"Name":"' .$rs["Name"] . '",';
    $output .='{"Description":"' .$rs["Description"] . '",';
    $output .='{"Price":"' .$rs["Price"] . '",}';
}

echo($output);


?>