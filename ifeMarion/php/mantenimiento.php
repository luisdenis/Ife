<?php 

	require_once 'include/mysql_connect_mantenimiento.php';
	if(!isset($_SESSION)) session_start();
	if($_SESSION['autenticado'] != 1){
		header("location:index.php");
		exit();
	}
	//paginacion
	if(isset($_POST['page']))
	$page = $_POST['page'];

	if(isset($_POST['cant']))
	$cant = $_POST['cant'];

	//Busqueda
	if(isset($_POST['nodo']))
	$nodo = $_POST['nodo'];

	if(isset($_POST['logicalid']))
	$logicalid = $_POST['logicalid'];

	if(isset($_POST['direccion']))
	$direccion = $_POST['direccion'];

	if(isset($_POST['localizadorrx']))
	$localizadorrx = $_POST['localizadorrx'];

	if(isset($_POST['localizador']))
	$localizador = $_POST['localizador'];

	if(isset($_POST['estacion'])){
		$estacion = $_POST['estacion'];
		if($estacion == "caracas" ) $estacion = 1;
		else  if($estacion == "charallave norte" ) $estacion = 2;
		else  if($estacion == "charallave sur" ) $estacion = 3;
		else  if($estacion == "cua" ) $estacion = 4;
		else  $estacion = "";
	}

	if(isset($_POST['idestacion']))
	$estacion = $_POST['idestacion'];

	if(isset($_POST['estado']))
	$estado = $_POST['estado'];

	if(isset($_POST['nombreCampo']))
	$nombreCampo = $_POST['nombreCampo'];

	if(isset($_POST['nombreUsuario']))
	$nombreUsuario = $_POST['nombreUsuario'];

	if(isset($_POST['id']))
	$id = $_POST['id'];

	if(isset($_POST['type']))
	$type = $_POST['type'];
	if($type == "getListMaquinaMantenimiento") echo json_encode(getListMaquinaMantenimiento($page,$cant,$nodo,$nombreUsuario,$estacion));
	else if($type == "getListestacion") echo json_encode(getListestacion());
	else if($type == "getListMaquina") echo json_encode(getListMaquina($id));
	else if($type == "getListComponente") echo json_encode(getListComponente($id));
?>