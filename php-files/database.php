<?php

$con = mysqli_connect("localhost","root","","products");

if(!$con){
    die('Connection Failed'. mysqli_connect_error());
}
?>