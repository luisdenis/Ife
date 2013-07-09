<?php

if(!isset($_SESSION)) session_start();
if($_SESSION['autenticado'] != 1){
	header("location:index.php");
	exit();
}


?>