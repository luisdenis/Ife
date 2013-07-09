
<?php require_once 'include/mysql_connect.php' ?>

<?php

	if(isset($_POST['nombre']))
	$name = $_POST['nombre'];
	if(isset($_POST['password']))
	$password = $_POST['password'];
	$type = $_POST['type'];
	if($type == "set")
	echo json_encode(login($name, $password));
	else if($type == "get")
	echo json_encode(get());
	else if($type == "chance"){
	if(!isset($_SESSION)) session_start();
	echo json_encode(chancePassword($password,$_SESSION['id']));
	}

?>