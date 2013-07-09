<?php
include ('/php/include/seguridad.php');
?>
<!DOCTYPE html>
<html lang = "es">
<head>
      <meta charset="utf-8" />
      <title>Ife</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <!-- Le styles -->
      <link href="css/style.css" rel="stylesheet">
      <link href="css/bootstrap.css" rel="stylesheet">
      <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
      <link href="css/pagination.css" rel="stylesheet">
      <!-- Le script -->
      <script type="text/javascript" src="js/bbui-0.9.1.js"></script>
      <script type="text/javascript" src="js/index.js"></script>
      <script type="text/javascript" src="js/utils.js"></script>
      <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script type="text/javascript" src="js/modernizr.custom.35794.js"></script>
      <script type="text/javascript" src="js/html5placeholder.jquery.min.js"></script>
      <script type="text/javascript" src="js/jquery.pagination.js"></script>
      <script type="text/javascript" src="js/evento.js"></script>
      <script type="text/javascript" src="js/user.js"></script>
      <script type="text/javascript" src="js/maquina.js"></script>
      <script type="text/javascript" src="js/mantenimiento.js"></script>

      <style type="text/css">
        body {
          /* background-image: url('img/background_logo.jpg'); */
          background-color: hsl(150,50%,20%);
        }
      </style>
</head>
<body onload = "iniciarHome()">
    <div id = "banner"  class="banner">
      <span class="pull-right" ><img src="img/tren.jpg"  class="img-rounded imageBanner" /></span>
      <div>
        <img class = "imgLogo" alt="Logo" src= "img/logo_sinfondo.png" />
        <span class="lead">Sistema de Mantenimiento y Control de Maquinas</span>
      </div>
      <div width="100%" style="color:#FFFFFF; height: 30px; background-color: #EEA429;">
        <span class="pull-right" style="padding-top: 2px; padding-right: 2px;"><button onclick = "cerrarSession();" id="idbuttonCerrarSesion" class="btn btn-small btn-primary" id="submit">Cerrar Sesión</button></span>
        <h4 style= "margin: 0px; padding-top: 5px; padding-left: 5px;">Usuario:<span id = "idNombre"> </span></h4>
      </div>
      <div id = "serverhour" width="100%" align="right" style="background-color: #586CB1; color:#FFFFFF;padding-left: 5px; padding-right: 5px; "> <b></b></div>
    </div>
</body>
</html>