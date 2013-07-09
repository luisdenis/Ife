  bb.init({
          onscreenready: function(element, id) {

          },
          ondomready: function(element, id) {

             if (id == "listaUsuario"){
                setCookie("currentActivity","listaUsuario",2);
                $("#bottonCount").html(cant);
                var strCant = "";
                for (i=10; i<=50; i = i+10){
                  if (cant == i)
                  strCant = strCant+'<li class= "active" ><a>'+i+'</a></li>';
                  else strCant = strCant+'<li ><a href="#" onclick="cambiarCant('+i+'); return false;"   >'+i+'</a></li>';
                }
                $("#idulnumberpage").html(strCant);

                var strMenu = "";
                if(cargo == "Administrador"){
                  strMenu = strMenu+'<li class="nav-header">Administración de usuario</li>';
                  strMenu = strMenu+'<li class="active" ><a href="#">Gestionar usuarios</a></li>';
                  strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'bitacoraUsuario.html\', \'bitacoraUsuario\');">Bitacora de actividades</a></li>';
                  strMenu = strMenu+'<li class="divider"></li>';
                }
                strMenu = strMenu+'<li class="nav-header">Administración de maquinas</li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaMaquina.html\', \'listaMaquina\');">Gestionar maquinas</a></li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'mantenimiento.html\', \'mantenimiento\');">Mantenimiento de maquina</a></li>';
                strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'generarReporte.html\', \'generarReporte\');">Generar reporte</a></li>';
                $("#idmenu").html(strMenu);

                  obtenerListaUsuario(1);
                $('#idnombrefilter').change(function() {
                  obtenerListaUsuario(1);
                });
                $('#idapellidofilter').change(function() {
                  obtenerListaUsuario(1);
                });
                $('#idcedulafilter').change(function() {
                  obtenerListaUsuario(1);
                });
             }

            if (id == "bitacoraUsuario"){
                setCookie("currentActivity","bitacoraUsuario",2);
                $("#bottonCount").html(cant);
                var strCant = "";
                for (i=10; i<=50; i = i+10){
                  if (cant == i)
                  strCant = strCant+'<li class= "active" ><a>'+i+'</a></li>';
                  else strCant = strCant+'<li ><a href="#" onclick="cambiarCant('+i+'); return false;"   >'+i+'</a></li>';
                }
                $("#idulnumberpage").html(strCant);

                var strMenu = "";
                if(cargo == "Administrador"){
                  strMenu = strMenu+'<li class="nav-header">Administración de usuario</li>';
                  strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaUsuario.html\', \'listaUsuario\');">Gestionar usuarios</a></li>';
                  strMenu = strMenu+'<li class="active" ><a href="#">Bitacora de actividades</a></li>';
                  strMenu = strMenu+'<li class="divider"></li>';
                }
                strMenu = strMenu+'<li class="nav-header">Administración de maquinas</li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaMaquina.html\', \'listaMaquina\');">Gestionar maquinas</a></li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'mantenimiento.html\', \'mantenimiento\');">Mantenimiento de maquina</a></li>';
                strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'generarReporte.html\', \'generarReporte\');">Generar reporte</a></li>';
                $("#idmenu").html(strMenu);
             }


             if (id == "listaMaquina"){
               setCookie("currentActivity","listaMaquina",2);
                $("#bottonCount").html(cant);
                var strCant = "";
                for (var i=10; i<=50; i = i+10){
                  if (cant == i)
                  strCant = strCant+'<li class= "active" ><a>'+i+'</a></li>';
                  else strCant = strCant+'<li ><a href="#" onclick="cambiarCant('+i+'); return false;">'+i+'</a></li>';
                }
                $("#idulnumberpage").html(strCant);

                var strMenu = "";
                if(cargo == "Administrador"){
                  strMenu = strMenu+'<li class="nav-header">Administración de usuario</li>';
                  strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaUsuario.html\', \'listaUsuario\');">Gestionar usuarios</a></li>';
                  strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'bitacoraUsuario.html\', \'bitacoraUsuario\');">Bitacora de actividades</a></li>';
                  strMenu = strMenu+'<li class="divider"></li>';
                }
                strMenu = strMenu+'<li class="nav-header">Administración de maquinas</li>';
                strMenu = strMenu+'<li class="active"><a href="#">Gestionar maquinas</a></li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'mantenimiento.html\', \'mantenimiento\');">Mantenimiento de maquina</a></li>';
                strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'generarReporte.html\', \'generarReporte\');">Generar reporte</a></li>';
                $("#idmenu").html(strMenu);


                obtenerListaMaquina(1);
                $('#idestacionfilter').change(function() {
                  obtenerListaMaquina(1);
                });
                $('#idnodofilter').change(function() {
                  obtenerListaMaquina(1);
                });
                $('#idlocalizadorfilter').change(function() {
                  obtenerListaMaquina(1);
                });
                 $('#iddireccionfilter').change(function() {
                  obtenerListaMaquina(1);
                });
             }



              if (id == "mantenimiento"){
                setCookie("currentActivity","mantenimiento",2);
                $("#bottonCount").html(cant);
                var strCant = "";
                for (i=10; i<=50; i = i+10){
                  if (cant == i)
                  strCant = strCant+'<li class= "active" ><a>'+i+'</a></li>';
                  else strCant = strCant+'<li ><a href="#" onclick="cambiarCant('+i+'); return false;"   >'+i+'</a></li>';
                }
                $("#idulnumberpage").html(strCant);

                var strMenu = "";
                if(cargo == "Administrador"){
                  strMenu = strMenu+'<li class="nav-header">Administración de usuario</li>';
                  strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaUsuario.html\', \'listaUsuario\');">Gestionar usuarios</a></li>';
                  strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'bitacoraUsuario.html\', \'bitacoraUsuario\');">Bitacora de actividades</a></li>';
                  strMenu = strMenu+'<li class="divider"></li>';
                }
                strMenu = strMenu+'<li class="nav-header">Administración de maquinas</li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaMaquina.html\', \'listaMaquina\');">Gestionar maquinas</a></li>';
                strMenu = strMenu+'<li class="active" ><a href="#">Mantenimiento de maquina</a></li>';
                strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'generarReporte.html\', \'generarReporte\');">Generar reporte</a></li>';
                $("#idmenu").html(strMenu);

               obtenerListaMaquinaMantenimiento(1);
                $('#idestacionfilter').change(function() {
                  obtenerListaMaquinaMantenimiento(1);
                });
                $('#idnodofilter').change(function() {
                  obtenerListaMaquinaMantenimiento(1);
                });
                $('#idlocalizadorfilter').change(function() {
                  obtenerListaMaquinaMantenimiento(1);
                });
                 $('#iddireccionfilter').change(function() {
                  obtenerListaMaquinaMantenimiento(1);
                });

             }

              if (id == "generarReporte"){
                setCookie("currentActivity","generarReporte",2);
                $("#bottonCount").html(cant);
                var strCant = "";
                for (i=10; i<=50; i = i+10){
                  if (cant == i)
                  strCant = strCant+'<li class= "active" ><a>'+i+'</a></li>';
                  else strCant = strCant+'<li ><a href="#" onclick="cambiarCant('+i+'); return false;"   >'+i+'</a></li>';
                }
                $("#idulnumberpage").html(strCant);

                var strMenu = "";
                if(cargo == "Administrador"){
                  strMenu = strMenu+'<li class="nav-header">Administración de usuario</li>';
                  strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaUsuario.html\', \'listaUsuario\');">Gestionar usuarios</a></li>';
                  strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'bitacoraUsuario.html\', \'bitacoraUsuario\');">Bitacora de actividades</a></li>';
                  strMenu = strMenu+'<li class="divider"></li>';
                }
                strMenu = strMenu+'<li class="nav-header">Administración de maquinas</li>';
                strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaMaquina.html\', \'listaMaquina\');">Gestionar maquinas</a></li>';
                strMenu = strMenu+'<li  ><a href="javascript:bb.pushScreen(\'mantenimiento.html\', \'mantenimiento\');">Mantenimiento de maquina</a></li>';
                strMenu = strMenu+'<li class="active" ><a href="#">Generar reporte</a></li>';
                $("#idmenu").html(strMenu);
             }

              if (id == "agregarMantenimiento"){
                  setCookie("currentActivity","agregarMantenimiento",2);

                    $('#idenviando').html('<button id = "Limpiar" class="btn btn-danger" type="button" onclick = "cleanTextMantenimientoAgregar();">Limpiar</button> <button id = "guardar" class="btn btn-primary" type="submit"  >Guardar</button>');
                    $('#myModalLabel').html('<img src="img/maquina_mantenimiento.png">Registrar Mantenimiento');
                    $("#idSelectestacion").off("change");
                    $("#idSelectNodo").off("change");

                    var strMenu = "";
                    if(cargo == "Administrador"){
                      strMenu = strMenu+'<li class="nav-header">Administración de usuario</li>';
                      strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaUsuario.html\', \'listaUsuario\');">Gestionar usuarios</a></li>';
                      strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'bitacoraUsuario.html\', \'bitacoraUsuario\');">Bitacora de actividades</a></li>';
                      strMenu = strMenu+'<li class="divider"></li>';
                    }
                    strMenu = strMenu+'<li class="nav-header">Administración de maquinas</li>';
                    strMenu = strMenu+'<li ><a href="javascript:bb.pushScreen(\'listaMaquina.html\', \'listaMaquina\');">Gestionar maquinas</a></li>';
                    strMenu = strMenu+'<li class="active" ><a href="#">Mantenimiento de maquina</a></li>';
                    strMenu = strMenu+'<li><a href="javascript:bb.pushScreen(\'generarReporte.html\', \'generarReporte\');">Generar reporte</a></li>';
                    $("#idmenu").html(strMenu);
                    var urlS= "php/mantenimiento.php";
                    xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "getListestacion"} ,async: false, cache:false, success: function(data){
                      var str = '<option value ="0" selected >Seleccione</option>';

                      for( var i in data){
                        str = str+ '<option value ="'+data[i].id_estacion+'">'+data[i].nombre+'</option>';
                      }
                      $("#idSelectestacion").html(str);
                      }, error: function(xhrServicesTest, textStatus, errorThrown){
                        alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
                        console.log(""+textStatus);
                        console.log(""+errorThrown);
                      }
                      });
                    $('#idSelectestacion').change(function() {

                          var urlS= "php/mantenimiento.php";
                          document.getElementById('idListaComponente').innerHTML = " ";
                          xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "getListMaquina", id : $("#idSelectestacion").val() } ,async: true, cache:false, success: function(data){
                          str = '<option value ="0" selected >Seleccione</option>';
                          for( var i in data){
                            str = str+ '<option value ="'+data[i].id_maquina+'">'+data[i].nodo+'</option>';
                          }
                          $("#idSelectNodo").html(str);
                          }, error: function(xhrServicesTest, textStatus, errorThrown){
                            alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
                            console.log(""+textStatus);
                            console.log(""+errorThrown);
                          }
                          });

                      });

                      $('#idSelectNodo').change(function() {
                          var urlS= "php/mantenimiento.php";
                          
                          xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "getListComponente", id : $("#idSelectNodo").val() } ,async: true, cache:false, success: function(data){
                          document.getElementById('idListaComponente').innerHTML = " ";
                          onloadListComponent(data);
                          }, error: function(xhrServicesTest, textStatus, errorThrown){
                            alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
                            console.log(""+textStatus);
                            console.log(""+errorThrown);
                          }
                          });

                      });


                    $('#formularioagregarmantenimiento').unbind('submit');
                    $("#formularioagregarmantenimiento").submit(agregarMantenimiento);
                     $('#myModal').on('hidden', function () {
                      cleanMaquinaMessageError();
                    });


             }

            var strNombre = " "+nombre +" "+apellido;
            $('#idNombre').html(''+strNombre);
            }
          });
