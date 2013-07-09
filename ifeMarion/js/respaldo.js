 $("#banner").html('<span class="pull-right" ><img src="img/tren.jpg"  class="img-rounded imageBanner" /></span>'+
        '<div>'+
          '<img class = "imgLogo" alt="Logo" src= "img/logo_sinfondo.png" />'+
          '<span class="lead">Sistema de Mantenimiento y Control de Maquinas</span>'+
        '</div>'+
         '<div width="100%" style="color:#FFFFFF; height: 30px; background-color: #EEA429;">'+
            '<span class="pull-right" style="padding-top: 2px; padding-right: 2px;"><button onclick = "cerrarSession();" id="idbuttonCerrarSesion" class="btn btn-small btn-primary" id="submit">Cerrar Sesión</button></span>'+
            '<h4 style= "margin: 0px; padding-top: 5px; padding-left: 5px;">Usuario: '+nombre+' '+apellido+' </h4>'+
          '</div>'+
          '<div id = "serverhour" width="100%" align="right" style="background-color: #586CB1; color:#FFFFFF;padding-left: 5px; padding-right: 5px; "> <b>'+fecha()+'</b></div>');

        $("#content").html('<div class="row-fluid">'+
                            '<div class="span2">'+
                            '<div class="well">'+
                            '<ul class="nav nav-list">'+
                            '<li class="nav-header">Administración de Usuario</li>'+
                            '<li ><a href="#">Lista de Usuario</a></li>'+
                            '<li ><a href="#">Agregar Usuario</a></li>'+
                            '<li><a href="#">Eliminar Usuario</a></li>'+
                            '<li><a href="#">Modificar Usuario</a></li>'+
                            '<li class="divider"></li>'+
                            '<li class="nav-header">Administración de Maquinas</li>'+
                            '<li class="active" ><a href="#">Lista de Maquina</a></li>'+
                            '<li><a href="#">Agregar Maquina</a></li>'+
                            '<li><a href="#">Modificar Estado de Maquina</a></li>'+
                            '<li><a href="#">Reporte de Maquina</a></li>'+
                            '</ul>'+
                            '</div>'+
                            '</div>'+
                            '<div class="span10">'+
                            '<div class="well-white">'+
                            '<div class="row-fluid " style="padding-top: 0px;">'+
                            '<div class="span12 well-red" align="center"><h3>Lista de Usuarios</h3></div>'+
                            '</div>'+
                            '<div class="row-fluid " style="padding-top: 0px;">'+
                            '<div class="span12" style="padding-right: 10px;padding-left: 10px;">'+
                            '<table class="table table-hover table-bordered" >'+
                            '<thead>'+
                            '<tr >'+
                            '<th>#</th>'+
                            '<th>Nombre</th>'+
                            '<th>Apellido</th>'+
                            '<th>Cédula</th>'+
                            '<th>Cargo</th>'+
                            '<th>Turno</th>'+
                            '<th>Número de Teléfono</th>'+
                            '<th>Email</th>'+
                            '</tr>'+
                            '</thead>'+
                            '<tbody>'+

                            '<tr >'+
                            '<td>1</td>'+
                            '<td>Luis Denis</td>'+
                            '<td>1</td>'+
                            '<td>Luis Denis</td>'+
                            '<td>1</td>'+
                            '<td>Luis Denis</td>'+
                            '<td>1</td>'+
                            '<td>Luis Denis</td>'+
                            '</tr>'+
                            '<tr>'+
                            '</tbody>'+
                            '</table>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>');
