<?php

$mysql_user = 'root';
$mysql_host = 'localhost';
$mysql_password = '';
$my_database = 'sygcife';


function getListMaquinaMantenimiento($page,$cant,$nodo,$usuario,$estacion) {

	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);

	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}

	$strConsulta = "";

	if (strlen($nodo) == 0 and strlen($usuario) == 0  and strlen($estacion) == 0  )
		$strConsulta = '';
	else
		$strConsulta = 'WHERE  nodo = "'.$nodo.'"or id_estacion = "'.$estacion.'" ';

	$res = array();
	$indice = ($page-1)*$cant;
	$consulta = "SELECT COUNT(1) as total FROM maquina INNER JOIN mantenimiento ON maquina.id_maquina = mantenimiento.id_maquina LEFT JOIN user ON mantenimiento.id_user = user.id_user  ".$strConsulta;
	if ($resultado = mysqli_query($enlace, $consulta)) {
	   $fila = mysqli_fetch_row($resultado);
	   $res['cant'] = $fila[0];
		//$total = $fila[0];
	    mysqli_free_result($resultado);
	}
	$consulta = 'SELECT * FROM maquina INNER JOIN mantenimiento ON maquina.id_maquina = mantenimiento.id_maquina LEFT JOIN user ON mantenimiento.id_user = user.id_user '.$strConsulta.' LIMIT '.$indice.','.$cant;
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = array();
		while ($row = mysqli_fetch_assoc($resultado)) {
	       $obj[]=$row;
	    }
	    mysqli_free_result($resultado);
	}

	$res['lista']=$obj;

	//$res['cant'] = $cant;

	$res['page'] = $page;

	//$res['totalpages'] = ceil( $res['cant']/$cant);

	/* cerrar la conexión */
	mysqli_close($enlace);
	return $res;
}

function getListestacion(){
	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = "SELECT * FROM estacion ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = array();
		while ($row = mysqli_fetch_assoc($resultado)) {
	       $obj[] =$row;
	    }
	    mysqli_free_result($resultado);
	}
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;
}

function getListMaquina($id){
	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = "SELECT id_maquina, nodo FROM maquina WHERE  id_estacion = ".$id." ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = array();
		while ($row = mysqli_fetch_assoc($resultado)) {
	       $obj[] =$row;
	    }
	    mysqli_free_result($resultado);
	}
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;
}


function getListComponente($id){
	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = "SELECT * FROM componente WHERE  id_maquina = ".$id." ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = array();
		while ($row = mysqli_fetch_assoc($resultado)) {
	       $obj[] =$row;
	    }
	    mysqli_free_result($resultado);
	}
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;
}




?>