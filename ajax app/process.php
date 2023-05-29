<?php
$conn=mysqli_connect("localhost", "root", "","data");
if($_POST["action"]=="insert "){
    insert();
}

function insert(){
    global $conn;

$data['name'] = $_POST['name'];
$data['email'] = $_POST['email'];
$data['age'] = $_POST['age'];
$data['address'] = $_POST['address'];
$data['mobile'] = $_POST['mobile'];
}
$conn=mysqli_query("SELECT * from ajaxtable")
// echo json_encode($data);
// exit;
?> 