<?php require_once 'include/mysql_connect.php' ?>

<?php
	if(!isset($_SESSION)) session_start();
	if($_SESSION['autenticado'] != 1){
		header("location:index.php");
		exit();
	}

	if(isset($_POST['page']))
	$page = $_POST['page'];
	if(isset($_POST['cant']))
	$cant = $_POST['cant'];

	if(isset($_POST['nombre']))
	$nombre = $_POST['nombre'];

	if(isset($_POST['apellido']))
	$apellido = $_POST['apellido'];

	if(isset($_POST['cedula']))
	$cedula = $_POST['cedula'];

	if(isset($_POST['nombreUsuario']))
	$nombreUsuario = $_POST['nombreUsuario'];
	if(isset($_POST['telefono']))
	$telefono = $_POST['telefono'];
	if(isset($_POST['email']))
	$email = $_POST['email'];
	if(isset($_POST['cargo']))
	$cargo = $_POST['cargo'];
	if(isset($_POST['turno']))
	$turno = $_POST['turno'];
	if(isset($_POST['nombreCampo']))
	$nombreCampo = $_POST['nombreCampo'];
	if(isset($_POST['id']))
	$id = $_POST['id'];
	$type = $_POST['type'];
	if(isset($_POST['contrasena']))
	$contrasena = $_POST['contrasena'];

	if($type == "getListUser") echo json_encode(getListUser($page,$cant,$nombre,$apellido,$cedula));
	else if($type == "setUser") echo json_encode(setUser($nombre,$apellido,$cedula,$nombreUsuario,$telefono,$email,$cargo,$turno));
	else if($type == "validateuser") echo json_encode(validateuser($nombreCampo,$nombreUsuario));
	else if($type == "eliminarUsuario") echo json_encode(eliminarUsuario($id,$_SESSION['id']));
	else if($type == "getUserById") echo json_encode(getUserById($id));
	else if($type == "updateUser") echo json_encode(updateUser($id,$nombre,$apellido,$cedula,$nombreUsuario,$telefono,$email,$cargo,$turno));
?>