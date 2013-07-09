<?php 

$mysql_user = 'root';
$mysql_host = 'localhost';
$mysql_password = '';
$my_database = 'sygcife';


function login($name, $password){
	if(!isset($_SESSION)) session_start();

	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}

	$consulta = "SELECT * FROM user INNER JOIN cargo ON user.id_cargo = cargo.id_cargo WHERE nombreUsuario = '".$name."' and password = '".$password."'; ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = array();
		$flag = false;
		while ($row = mysqli_fetch_assoc($resultado)) {
	      // $obj[]=$row;
			if($row["activo"] != 0){
				$flag = true;
				$obj [] = true;
				$_SESSION['autenticado'] = 1;
				$_SESSION['id'] = $row["id_user"];
				$_SESSION['nombre'] = $row["nombre"];
				$_SESSION['apellido'] = $row["apellido"];
				$_SESSION['cargo'] = $row["cargo"];
				$_SESSION['cedula'] = $row["cedula"];
				$_SESSION['email'] = $row["email"];
				$_SESSION['telefono'] = $row["telefono"];
				$_SESSION['turno'] = $row["turno"];
			}else{
				$_SESSION['id'] = $row["id_user"];
				$_SESSION['nombre'] = $row["nombre"];
				$_SESSION['apellido'] = $row["apellido"];
				$_SESSION['cargo'] = $row["cargo"];
				$_SESSION['cedula'] = $row["cedula"];
				$_SESSION['email'] = $row["email"];
				$_SESSION['telefono'] = $row["telefono"];
				$_SESSION['turno'] = $row["turno"];
				$obj [] = "activar";
				$flag = true;
			}
	    }
	    mysqli_free_result($resultado);
	}
	if(!$flag) $obj [] = false;
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;
}
function chancePassword($password,$id){
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = 'UPDATE user SET password="'.$password.'", activo = 1 WHERE id_user = '.$id;
	if ($resultado = mysqli_query($enlace, $consulta)) {
	  	mysqli_close($enlace);
	  	$_SESSION['autenticado'] = 1;
		return true;
	}else{
		printf($enlace->error);
		mysqli_close($enlace);
	    return false;
	}
}

function get(){
	if(!isset($_SESSION)) session_start();
	$res;
	$res['nombre'] = $_SESSION['nombre'];
	$res['apellido'] = $_SESSION['apellido'];
	$res['cargo'] = $_SESSION['cargo'];
	$res['cedula'] = $_SESSION['cedula'];
	$res['email'] = $_SESSION['email'];
	$res['telefono'] = $_SESSION['telefono'];
	$res['turno'] = $_SESSION['turno'];
	return $res;
}

function getUserById($id){
	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = "SELECT id_user, nombre, apellido,nombreUsuario, cedula, id_cargo, turno, telefono, email FROM user WHERE  id_user = ".$id." ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj;
		while ($row = mysqli_fetch_assoc($resultado)) {
	       $obj =$row;
	    }
	    mysqli_free_result($resultado);
	}
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;


}
function getListUser($page,$cant,$nombre,$apellido,$cedula){
	if(!isset($_SESSION)) session_start();
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);

	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}

	$strConsulta = "";

	if (strlen($nombre) == 0 and strlen($apellido) == 0 and strlen($cedula) == 0 )
		$strConsulta = 'WHERE  id_user != '.$_SESSION["id"];
	else
		$strConsulta = 'WHERE  (nombre = "'.$nombre.'" or apellido = "'.$apellido.'" or cedula = "'.$cedula.'") and id_user != '.$_SESSION["id"].'';

	$res = array();
	$indice = ($page-1)*$cant;
	$consulta = "SELECT COUNT(1) as total FROM user LEFT JOIN cargo ON user.id_cargo = cargo.id_cargo ".$strConsulta;
	if ($resultado = mysqli_query($enlace, $consulta)) {
	   $fila = mysqli_fetch_row($resultado);
	   $res['cant'] = $fila[0];
		//$total = $fila[0];
	    mysqli_free_result($resultado);
	}
	$consulta = 'SELECT id_user, nombre, apellido, cedula, cargo, turno, telefono, email FROM user LEFT JOIN cargo ON user.id_cargo = cargo.id_cargo  '.$strConsulta.' LIMIT '.$indice.','.$cant;
	//$consulta = 'SELECT * FROM user INNER JOIN cargo ON user.id_cargo = cargo.id_cargo  '.$strConsulta.' LIMIT '.$indice.','.$cant;
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


function setUser($nombre,$apellido,$cedula,$nombreUsuario,$telefono,$email,$cargo,$turno){
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = 'INSERT INTO user (nombre,apellido, cedula, nombreUsuario, telefono, email, id_cargo, turno, password,activo)
	VALUES ("'.$nombre.'" ,"'.$apellido.'","'.$cedula.'","'.$nombreUsuario.'","'.$telefono.'","'.$email.'","'.$cargo.'","'.$turno.'","1234", 0)';
	mysqli_query($enlace, $consulta);
	$newid = mysqli_insert_id($enlace);
	mysqli_close($enlace);
	return $newid;
}

function updateUser($id,$nombre,$apellido,$cedula,$nombreUsuario,$telefono,$email,$cargo,$turno){
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = 'UPDATE user SET nombre = "'.$nombre.'" , apellido = "'.$apellido.'", cedula = "'.$cedula.'",
	nombreUsuario = "'.$nombreUsuario.'", telefono = '.$telefono.' , email = "'.$email.'", id_cargo  = "'.$cargo.'", turno = "'.$turno.'" WHERE id_user = '.$id;
	if ($resultado = mysqli_query($enlace, $consulta)) {
	  	mysqli_close($enlace);
		return true;
	}else{
		printf($enlace->error);
		mysqli_close($enlace);
	    return false;
	}
}




function validateuser($nombreCampo,$nombreUsuario){
	global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
	$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
	if (mysqli_connect_errno()) {
	    printf("Falló la conexión: %s\n", mysqli_connect_error());
	    exit();
	}
	$consulta = "SELECT id_user FROM user where ".$nombreCampo." = '".$nombreUsuario."'; ";
	if ($resultado = mysqli_query($enlace, $consulta)) {
		$obj = false;
		$flag = false;
		while ($row = mysqli_fetch_assoc($resultado)) {
	      // $obj[]=$row;
			$obj = true;
			$flag = true;
	    }
	    mysqli_free_result($resultado);
	}
	if(!$flag) $obj = false;
	/* cerrar la conexión */
	mysqli_close($enlace);
	return $obj;
}

function eliminarUsuario($id,$idUser){
global 	$mysql_host, $mysql_user, $mysql_password, $my_database;
$enlace = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $my_database);
if (mysqli_connect_errno()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}
$consulta = 'DELETE FROM user WHERE id_user  = '.$id;
$consulta = mysqli_query($enlace, $consulta);
mysqli_close($enlace);
return $consulta;
}


?>