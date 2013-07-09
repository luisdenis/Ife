<?php
if(!isset($_SESSION)){ session_start();
  if(isset($_SESSION['autenticado'])){
    header("location:home.php");
    exit();
  }
}
?>
<!DOCTYPE html>
<html lang="es">
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
    <link rel="shortcut icon" href="img/logo_icono.ico">
    <!-- Le script -->
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/modernizr.custom.35794.js"></script>
   <!--<script type="text/javascript" src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>-->
    <script type="text/javascript" src="js/html5placeholder.jquery.min.js"></script>
    <script type="text/javascript" src="js/user.js"></script>
    <script type="text/javascript" src="js/utils.js"></script>
    <style type="text/css">
      body {
        background-image: url('img/background_logo.jpg');
      }
    </style>

  </head>
  <body onload = "iniciar();" >
    <div id = "banner">&nbsp;</div>
    <div id= "content" class="container"></div>
    <!-- Modal -->
    
    <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel"><img src="img/lock.png"/>Cambio de contraseña</h3>
        </div>
        <div class="modal-body">
          <div id="message-error"></div>
          <div id ="iddivcedula" >
              <label><b>Contraseña</b> <span style="color:red;">*</span> </label>
              <input id="password-change" type="password" class="input-block-level" placeholder="Contraseña" maxlength="30"><span id = "iddivcontrasenamessage"> </span>
              <span class="help-block">Debe introducir al menos 4 caracteres</span>
          </div>
          <div id ="iddivcedula" >
              <label><b>Repetir Contraseña</b> <span style="color:red;">*</span> </label>
              <input id="password-retry" type="password" class="input-block-level" placeholder="Contraseña" maxlength="30"><span id = "iddivcontrasenarmessage"> </span>
              <span class="help-block">Repita la contraseña para verificar</span>
          </div>
        </div>
        <div class="modal-footer">
        <div id= "idenviando">
            <button class="btn btn-primary" type="button" onclick = "guardarContrasena()" >Cambiar</button>
        </div>
        </div>
      </div>
  </body>
</html>
