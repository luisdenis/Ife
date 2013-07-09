<?php

$mysql_user = 'root';
$mysql_host = 'localhost';
$mysql_password = '';
$my_database = 'sygcife';



function getListMaquina($page,$cant,$nodo,$localizador,$direccion,$estacion){
	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);

	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}

	$strConsulta = "";

	if (strlen($nodo) == 0 and strlen($localizador) == 0 and strlen($direccion) == 0 and strlen($estacion) == 0  )
		$strConsulta = '';
	else
		$strConsulta = 'WHERE  nodo = "'.$nodo.'" or localizador = "'.$localizador.'" or direccion_ip = "'.$direccion.'" or id_estacion = "'.$estacion.'" ';

	$res = array();
	$indice = ($page-1)*$cant;
	$consulta = "SELECT COUNT(1) as total FROM maquina ".$strConsulta;
	if ($resultado = mysqli_query($enlace, $consulta)) {
	   $fila = mysqli_fetch_row($resultado);
	   $res['cant'] = $fila[0];
		//$total = $fila[0];
	    mysqli_free_result($resultado);
	}
	$consulta = 'SELECT id_maquina, nodo,logical_id, direccion_ip, localizador_rx, localizador, hora_ultimo_mensaje, desaface_horario, estado FROM maquina '.$strConsulta.' LIMIT '.$indice.','.$cant;
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




//function setMaquina($nodo,$logicalId,$direccion,$localizadorRx,$localizador,$horaUltimoMensaje,$desfase_hora){
function setMaquina($nodo,$logicalId,$direccion,$localizadorRx,$localizador,$estacion,$estado){
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$horaUltimoMensaje = "NOW()";
	$desfase_hora = "00:03:00";

	$consulta = 'INSERT INTO maquina (nodo,logical_id, direccion_ip, localizador_rx, localizador, hora_ultimo_mensaje, desaface_horario,id_estacion, estado)
	VALUES ("'.$nodo.'" ,"'.$logicalId.'","'.$direccion.'","'.$localizadorRx.'","'.$localizador.'",'.$horaUltimoMensaje.',"'.$desfase_hora.'",'.$estacion.', '.$estado.' )';
	mysqli_query($enlace, $consulta);
	$newid = mysqli_insert_id($enlace);
	mysqli_close($enlace);
	return $newid;
}

function eliminarMaquina($id,$idUser){
global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
if (mysqli_connect_errno()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}
$consulta = 'DELETE FROM maquina WHERE id_maquina  = '.$id;
$consulta = mysqli_query($enlace, $consulta);
mysqli_close($enlace);
return $consulta;
}

function getMaquinaById($id){

	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = "SELECT id_maquina,nodo, logical_id, direccion_ip, localizador_rx, localizador FROM maquina WHERE  id_maquina = ".$id." ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = array();
		while ($row = mysqli_fetch_assoc($resultado)) {
	       $obj =$row;
	    }
	    mysqli_free_result($resultado);
	}
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;
}

function updateMaquina($nodo,$logicalid,$direccion,$localizadorrx,$localizador,$id){
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}

	$consulta = 'UPDATE maquina SET nodo = "'.$nodo.'" , logical_id = "'.$logicalid.'", direccion_ip = "'.$direccion.'",
	localizador_rx = "'.$localizadorrx.'", localizador = '.$localizador.' WHERE id_maquina = '.$id;
	if ($resultado = mysqli_query($enlace, $consulta)) {
	  	mysqli_close($enlace);
		return true;
	}else{
		printf($enlace->error);
		mysqli_close($enlace);
	    return false;
	}
}


?>