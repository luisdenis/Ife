

function iniciar(){
    setCookie("currentActivity","listaMaquina",2);
    $("#content").html('<form id = "formulario" class="form-signin" method="post" >'+
    '<div id="message"></div>'+
    '<div width= "100%" align="center"><img src="img/logo-ife.png" width="250"></div>'+
    '<h2  class="form-signin-heading">Iniciar Sesión</h2>'+
    '<input id="nombre" type="text" class="input-block-level" placeholder="Nombre de usuario" maxlength="30" >'+
    '<input id="password" type="password" class="input-block-level" placeholder="Contraseña" maxlength="30">'+
    '<span id="idbutton"><button id="idbuttonEntrar" class="btn btn-large btn-danger" id="submit" onclick = "validarFormulario();" >Entrar</button></span>'+
    '</form>');
    $('input[placeholder]').placeholder();
    $("#formulario").submit(validarFormulario);
}

function iniciarHome(){
    if(!verificarSession()) location.href="index.php";
    obtenerUsuario();
    currentActivity=getCookie("currentActivity");
    if (currentActivity!=null && currentActivity!="" && currentActivity != "undefined" )
    bb.pushScreen(currentActivity+'.html', ''+currentActivity);
    else location.href="index.php";
}
function  pageselectCallback(page_index, jq){
    document.getElementById('idtabla').innerHTML = " ";
    document.getElementById('idloadingdiv').innerHTML = '<img id="loading" alt="Cargando" src="img/loading.gif" width="30" height="30" />&nbsp;Cargando....';
    obtenerListaUsuario(page_index+1);
    document.getElementById('idloadingdiv').innerHTML = '';
    return false;
}

function  pageselectMaquina(page_index, jq){
    document.getElementById('idtabla').innerHTML = " ";
    document.getElementById('idloadingdiv').innerHTML = '<img id="loading" alt="Cargando" src="img/loading.gif" width="30" height="30" />&nbsp;Cargando....';
    obtenerListaMaquina(page_index+1);
    document.getElementById('idloadingdiv').innerHTML = '';
    return false;
}


function onloadUserList(data){

    list =  data['lista'];
    var page = data['page'];
    if(list.length == 0){
       document.getElementById("idtabla").innerHTML = '<hr><div align = "center" ><b>NO HAY USUARIOS</b></div>';
       $("#pagination").html("");
       return false;
    }else{
        var opt = {callback: pageselectCallback, current_page : page-1 };
        var cantLocal = data['cant'];
        $("#pagination").pagination(cantLocal, opt);
    }
  // Create our containing table
    var table = document.createElement('table');
    table.setAttribute('class','table table-hover table-condensed table-bordered');
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = '#';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Nombre';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Apellido';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Cédula';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Cargo';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Turno';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Número de Teléfono';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Email';

    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Operaciones';

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

      for( var i in list){
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.setAttribute("id",""+list[i].id_user);

            var tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].id_user;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].nombre;
            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].apellido;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].cedula;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].cargo;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].turno;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].telefono;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].email;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = '<img src = "img/usuario_eliminar.png" onclick = "eliminarUsuario('+list[i].id_user+',\''+escape(list[i].nombre)+'\',\''+escape(list[i].apellido)+'\');" />&nbsp;<img src = "img/usuario_editar.png" onclick = "changeUsuario('+list[i].id_user+');" /> ';
      }
      document.getElementById("idtabla").appendChild(table);
}


function onloadMaquinaList(data){

 list =  data['lista'];
    var page = data['page'];
    if(list.length == 0){
       document.getElementById("idtabla").innerHTML = '<hr><div align = "center" ><b>NO SE TIENE RESULTADO DE MAQUINAS</b></div>';
       $("#pagination").html("");
       return false;
    }else{
        var opt = {callback: pageselectMaquina, current_page : page-1 };
        var cantLocal = data['cant'];
        $("#pagination").pagination(cantLocal, opt);
    }
  // Create our containing table
    var table = document.createElement('table');
    table.setAttribute('class','table table-hover table-condensed table-bordered');
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = '#';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Nodo';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'LogicalId';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Direcc. IP';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Localizador RX';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Localizador';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Hora último mensaje';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Desfase horario';

    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Operaciones';

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

      for( var i in list){
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            if(list[i].estado == 1) tr.setAttribute("style","color: #66CD00;");
            else  if(list[i].estado == 2) tr.setAttribute("style","color: red;");
            else if(list[i].estado == 3) tr.setAttribute("style","color: #E3CC00;");

            tr.setAttribute("id",""+list[i].id_maquina);

            var tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].id_maquina;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].nodo;
            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].logical_id;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].direccion_ip;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].localizador_rx;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].localizador;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].hora_ultimo_mensaje;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].desaface_horario;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = '<img src = "img/maquina_eliminar.png"  rel="tooltip" title="Eliminar" onclick = "eliminarMaquina('+list[i].id_maquina+',\''+escape(list[i].nodo)+'\');" />&nbsp;<img src = "img/maquina_editar.png"  rel="tooltip" title="Modificar" onclick = "modificarMaquina('+list[i].id_maquina+');" />  ';
      }
      document.getElementById("idtabla").appendChild(table);
}

function onloadMatenimientoList(data){

    list =  data['lista'];
    var page = data['page'];
    if(list.length == 0){
       document.getElementById("idtabla").innerHTML = '<hr><div align = "center" ><b>NO SE TIENE RESULTADO DE MANTENIMIENTO</b></div>';
       $("#pagination").html("");
       return false;
    }else{
        var opt = {callback: pageselectMaquina, current_page : page-1 };
        var cantLocal = data['cant'];
        $("#pagination").pagination(cantLocal, opt);
    }
  // Create our containing table
    var table = document.createElement('table');
    table.setAttribute('class','table table-hover table-condensed table-bordered');
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = '#';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Nodo';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'usuario';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Estado Inicial';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Estado Final';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Observación';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Observación';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Fecha de Mantenimiento';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Operaciones';

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

      for( var i in list){
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.setAttribute("onclick","detailMaquina("+list[i].id_maquina+")");
            if(list[i].estado == 1) tr.setAttribute("style","color: #66CD00;");
            else  if(list[i].estado == 2) tr.setAttribute("style","color: red;");
            else if(list[i].estado == 3) tr.setAttribute("style","color: #E3CC00;");
            tr.setAttribute("id",""+list[i].id_maquina);
            var tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].id_matenimiento;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].nodo;
            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].nombre+" "+list[i].apellido;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].localizador_rx;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].localizador_rx;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].localizador;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].observacion;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].fecha_mantenimiento;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = '<img src = "img/maquina_eliminar.png"  rel="tooltip" title="Eliminar" onclick = "eliminarMaquina('+list[i].id_maquina+',\''+escape(list[i].nodo)+'\');" />&nbsp;<img src = "img/maquina_editar.png"  rel="tooltip" title="Modificar" onclick = "modificarMaquina('+list[i].id_maquina+');" />  ';
      }
      document.getElementById("idtabla").appendChild(table);
}

function onloadListComponent(list){

  // Create our containing table
    var table = document.createElement('table');
    table.setAttribute('class','table table-hover table-condensed');
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = '#';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Nombre';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Cantidad';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Observación';
    thLabel = document.createElement('th');
    tr.appendChild(thLabel);
    thLabel.innerHTML = 'Estado';

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

      for( var i in list){
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.setAttribute("id","c"+list[i].id_componente);
            var tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            var cont = parseInt(i)+1;
            tdLabel1.innerHTML = ''+cont;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].nombre_componente;
            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = ''+list[i].cantidad;

            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = '<textarea  id="idobservacionagregar" style = "resize:none; width: 470px;"  placeholder="Ejemplo: Observacion del equipo" rows="2" ></textarea>';
            tdLabel1 = document.createElement('td');
            tr.appendChild(tdLabel1);
            tdLabel1.innerHTML = '<div align="right"><img src="img/check_si.png">&nbsp;<img src="img/check_no.png">&nbsp;<img src="img/warning.png"></div>';
      }

      document.getElementById("idListaComponente").appendChild(table);
}



