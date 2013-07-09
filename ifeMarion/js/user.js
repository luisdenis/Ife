function validarFormulario(){
  var flagError = false;
  var strError = "";

  $("#message").removeClass("alert alert-block alert-error fade in");
  $("#message").html("");
  $("#idbutton").html('<img src="img/loading.gif"/> &nbsp;Cargando...');

  if($("#nombre").val().trim().length == 0){
      flagError = true;
      strError = '<p>&#8226; Debe colocar un nombre.</p>';
      $("#idbutton").html('<button id="idbuttonEntrar" class="btn btn-large btn-danger" id="submit" onclick = "validarFormulario();" >Entrar</button>');
  }
  if($("#password").val().trim().length == 0){
      flagError = true;
       strError = strError + '<p>&#8226; Debe colocar una contraseña</p>';
      $("#idbutton").html('<button id="idbuttonEntrar" class="btn btn-large btn-danger" id="submit" onclick = "validarFormulario();" >Entrar</button>');
  }
  if(flagError){
   strError = "<strong>Error!!</strong>"+strError;
   $("#message").addClass("alert alert-block alert-error fade in").append(''+strError);
    return false;
  }
  sendLogin($("#nombre").val(),$("#password").val());
}

  function sendLogin(nombreLocal,passwordLocal){
      var urlS= "php/login.php";
        xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: { nombre: ""+nombreLocal, password: ""+passwordLocal, type  : "set"} ,async: false, cache:false, success: function(result){
          if (result==null){
            alert("null");
          } else if (result=="false"){
            strError = "<strong>Error!!</strong><p>&#8226; Nombre o contraseña errados.</p>";
            $("#message").addClass("alert alert-block alert-error fade in").html(''+strError);
            $("#idbutton").html('<button id="idbuttonEntrar" class="btn btn-large btn-danger" id="submit" onclick = "validarFormulario();" >Entrar</button>');
            return false;
          } else if(result=="true"){
            location.href="home.php";
          }else if (result == "activar"){
            $('#myModal').modal('show');
            $('#myModal').on('hidden', function () {
              $("#idbutton").html('<button class="btn btn-primary" type="button" onclick = "guardarContrasena()" >Cambiar</button>');
            });
          }

        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
  }

    function cerrarSession(){
      location.href="php/cerrarSession.php";
    }

    function obtenerUsuario(){
      var urlS= "php/login.php";
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "get"} ,async: false, cache:false, success: function(data){
          nombre = data['nombre'];
          apellido = data['apellido'];
          cedula = data['cedula'];
          turno = data['turno'];
          cargo = data['cargo'];
          email = data['email'];
          telefono = data['telefono'];
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
    }

    function obtenerListaUsuario(page){
      var urlS= "php/user.php";
      document.getElementById('idtabla').innerHTML = " ";
      document.getElementById('idloadingdiv').innerHTML = '<img id="loading" alt="Cargando" src="img/loading.gif" width="30" height="30" />&nbsp;Cargando....';
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "getListUser", page : page, cant : cant,
        nombre : $("#idnombrefilter").val().trim(),apellido: $("#idapellidofilter").val().trim(),
        cedula: $("#idcedulafilter").val().trim() } ,async: false, cache:false, success: function(data){
        onloadUserList(data);
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
       document.getElementById('idloadingdiv').innerHTML = '';

    }

     function verificarSession(){

        var urlS= "php/validateSession.php";
        var resultado;
        xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",async: false, cache:false, success: function(result){
          resultado = result;
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });

         if (resultado==null){
            return false;
          } else if (resultado ==true){
            return true;
          } else if (resultado==false){
            return false;
          }

    }


    function agregarUsuarioModal(){
      $('#myModal').modal('show');
      $('#idenviando').html('<button id = "Limpiar" class="btn btn-danger" type="button" onclick = "cleanTextAgregar();">Limpiar</button> <button id = "guardar" class="btn btn-primary" type="submit"  >Guardar</button>');
      $('#myModalLabel').html('<img src="img/usuario_agregar.png">Agregar Usuario');
      $("#myModal").off("hidden");

      $("#idnickagregar").off("change");
      $("#idcedulaagregar").off("change");
      $("#idemailagregar").off("change");
      $('#formularioagregar').unbind('submit');
      $("#formularioagregar").submit(agregarUsuario);
       $('#myModal').on('hidden', function () {
        cleanMessageError();
      });

      $('#idnickagregar').change(function() {
      if (validateNombreUsuario("nombreUsuario",  $("#idnickagregar").val().trim() )){
        $("#iddivnickmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
      }else {
        $("#iddivnickmessage").html(' <b class="text-error">Error!! Ya existe</b>');
      }

      });
      $('#idcedulaagregar').change(function() {
      if(validateNombreUsuario("cedula",  $("#idcedulaagregar").val().trim())){
        $("#iddivcedulamessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
      }else {
        $("#iddivcedulamessage").html(' <b class="text-error">Error!! Ya existe</b>');
      }

      });
      $('#idemailagregar').change(function() {
      if(validateNombreUsuario("email",  $("#idemailagregar").val().trim())){
        $("#iddivemailmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
      }else {
        $("#iddivemailmessage").html(' <b class="text-error">Error!! Ya existe</b>');
      }

      });
    }

    function validateAgregarUsuario(action) {
      cleanMessageError();
      re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
      number = /\d+$/
      var flagError = false;

      if($("#idnombreagregar").val().length == 0 || number.exec($("#idnombreagregar").val()) ){
            $("#iddivnombremessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }
        if($("#idapellidoagregar").val().length == 0 ||  number.exec($("#idapellidoagregar").val()) ){
            $("#iddivapellidomessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }

         if($("#idnickagregar").val().trim().length == 0){
            $("#iddivnickmessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }else if(action == "edit"){
            if(validateNombreUsuario("nombreUsuario", $("#idnickagregar").val().trim()) || dataLocal.nombreUsuario ==  $("#idnickagregar").val().trim() ) {
              $("#iddivnickmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
            }else{
                flagError = true;
                $("#iddivnickmessage").html(' <b class="text-error">Error!! Ya existe</b>');
            }
        }else if(validateNombreUsuario("nombreUsuario", $("#idnickagregar").val().trim())  ) {
            $("#iddivnickmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
        }else{
            flagError = true;
            $("#iddivnickmessage").html(' <b class="text-error">Error!! Ya existe</b>');
        }

         if($("#idcedulaagregar").val().trim().length == 0 || isNaN($("#idcedulaagregar").val()) ){
            $("#iddivcedulamessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }else if(action == "edit"){
            if(validateNombreUsuario("cedula", $("#idcedulaagregar").val().trim()) || dataLocal.cedula ==  $("#idcedulaagregar").val().trim() ) {
              $("#iddivcedulamessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
            }else{
                flagError = true;
                $("#iddivcedulamessage").html(' <b class="text-error">Error!! Ya existe</b>');
            }
        }else if(validateNombreUsuario("cedula", $("#idcedulaagregar").val().trim())) {
            $("#iddivcedulamessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
        }else{
            flagError = true;
            $("#iddivcedulamessage").html(' <b class="text-error">Error!! Ya existe</b>');
        }

         if( $("#idtelefonoagregar").val().trim().length == 0 ||  isNaN($("#idtelefonoagregar").val())){
            $("#iddivtelefonomessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }
        if(!re.exec($("#idemailagregar").val().trim()) ){
            $("#iddivemailmessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }else if(action == "edit"){
            if(validateNombreUsuario("email", $("#idemailagregar").val().trim()) || dataLocal.email ==  $("#idemailagregar").val().trim() ) {
              $("#iddivemailmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
            }else{
                flagError = true;
                $("#iddivemailmessage").html(' <b class="text-error">Error!! Ya existe</b>');
            }
        }else if(validateNombreUsuario("email", $("#idemailagregar").val().trim()) )  {
            $("#iddivemailmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
        }else{
            flagError = true;
            $("#iddivemailmessage").html(' <b class="text-error">Error!! Ya existe</b>');
        }

        if($("#idcargoagregar").val().trim().length == 0){
            $("#iddivcargomessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }
        if($("#idturnoagregar").val().trim().length == 0){
            $("#iddivturnomessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }
        if(flagError) return false;
        return true;
    }

function agregarUsuario(){
    if(validateAgregarUsuario("agregar")){
    var strHtml = $("#idenviando").html();
    $("#idenviando").html('<img src="img/loading.gif"/>&nbsp;Cargando...');
     var urlS= "php/user.php";
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
        data: {type  : "setUser", nombre : $("#idnombreagregar").val() , apellido: $("#idapellidoagregar").val(),
        nombreUsuario : $("#idnickagregar").val().trim(), telefono: $("#idtelefonoagregar").val().trim() ,email : $("#idemailagregar").val().trim(),
        cargo : $("#idcargoagregar").val().trim(), turno : $("#idturnoagregar").val().trim() ,cedula: $("#idcedulaagregar").val().trim() } ,
        async: false, cache:false, success: function(data){
        cleanTextAgregar();
        obtenerListaUsuario(1);
        $("#idloadingdiv").html('<b class="text-success">El usuario ha sido registrado</b>&nbsp;<img src="img/check_si.png"/>');
        $("#idenviando").html(strHtml);
        $('#myModal').modal('hide');
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
      }
      return false;
  }
  function cleanTextAgregar(){

            $("#idnombreagregar").val("");
            $("#idapellidoagregar").val("");
            $("#idnickagregar").val("");
            $("#idcedulaagregar").val("");
            $("#idtelefonoagregar").val("");
            $("#idemailagregar").val("");
            $("#idcargoagregar").val("");
            $("#idturnoagregar").val("");

            $("#iddivnombremessage").html('');
            $("#iddivapellidomessage").html('');
            $("#iddivnickmessage").html('');
            $("#iddivcedulamessage").html('');
            $("#iddivtelefonomessage").html('');
            $("#iddivemailmessage").html('');
            $("#iddivcargomessage").html('');
            $("#iddivturnomessage").html('');
      }

      function cleanMessageError(){
            $("#iddivnombremessage").html('');
            $("#iddivapellidomessage").html('');
            $("#iddivnickmessage").html('');
            $("#iddivcedulamessage").html('');
            $("#iddivtelefonomessage").html('');
            $("#iddivemailmessage").html('');
            $("#iddivcargomessage").html('');
            $("#iddivturnomessage").html('');
      }


    function cleanText(){
      $("#idnombrefilter").val("");
      $("#idapellidofilter").val("");
      $("#idcedulafilter").val("");
    }

    function validateNombreUsuario(campoValidar, valorCampo){
        var urlS= "php/user.php";
        var resultreturn= true;
        xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
        data: {nombreCampo : campoValidar ,type  : "validateuser", nombreUsuario :valorCampo } ,
        async: false, cache:false, success: function(result){

          if (result==null){
            alert("null");
          } else if (result == false){
             resultreturn = true;
          } else{
             resultreturn = false;
          }

        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
           resultreturn = false;
          }
        });
      return resultreturn;
    }

  function eliminarUsuario(id,nombreLocal,apellidoLocal){
      if (confirm("¿Está seguro de eliminar a "+unescape(nombreLocal)+" "+unescape(apellidoLocal)+"?")) {
      // Respuesta afirmativa...
      var urlS= "php/user.php";
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
        data: {type  : "eliminarUsuario", id: ""+id} ,
        async: false, cache:false, success: function(data){
          //buscarFiltro();
        setTimeout("elimiarRow("+id+")", 1000);
        $('#'+id).addClass("error");
        $("#idloadingdiv").html('<b class="text-success">El usuario ha sido Eliminado</b>&nbsp;<img src="img/check_si.png"/>');

        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
      }
  }

  function elimiarRow(id){
    $('#'+id).remove();
  }



  function changeUsuario(id){
      $("#idnickagregar").off("change");
      $("#idcedulaagregar").off("change");
      $("#idemailagregar").off("change");

      $("#myModal").off("hidden");
      $('#myModal').modal('show');
      $('#formularioagregar').unbind('submit');
      $('#idenviando').html('<button id = "submit" class="btn btn-primary" type="submit">Guardar Cambios</button>');
      $("#formularioagregar").submit(guardarCambio);
      $('#myModalLabel').html('<img src="img/usuario_editar.png">Modificar Usuario');

      var urlS= "php/user.php";
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
        data: {type  : "getUserById", id : id} , async: false, cache:false, success: function(data){
            $("#idnombreagregar").val(data.nombre);
            $("#idapellidoagregar").val(data.apellido);
            $("#idnickagregar").val(data.nombreUsuario);
            $("#idcedulaagregar").val(data.cedula);
            $("#idtelefonoagregar").val(data.telefono);
            $("#idemailagregar").val(data.email);
            $("#idcargoagregar").val(data.id_cargo);
            $("#idturnoagregar").val(data.turno);
            dataLocal = data;
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
      $('#idnickagregar').change(function() {
        if($("#idnickagregar").val() != dataLocal.nombreUsuario){
          if (validateNombreUsuario("nombreUsuario",  $("#idnickagregar").val().trim() )){
            $("#iddivnickmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
          }else {
            $("#iddivnickmessage").html(' <b class="text-error">Error!! Ya existe</b>');
          }
        }else{$("#iddivnickmessage").html(''); }
      });
      $('#idcedulaagregar').change(function() {
        if($("#idcedulaagregar").val() != dataLocal.nombreUsuario){
          if(validateNombreUsuario("cedula",  $("#idcedulaagregar").val().trim())){
            $("#iddivcedulamessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
          }else {
            $("#iddivcedulamessage").html(' <b class="text-error">Error!! Ya existe</b>');
          }
        }else{$("#iddivcedulamessage").html(''); }
      });

      $('#idemailagregar').change(function() {
        if($("#idemailagregar").val() != dataLocal.nombreUsuario){
          if(validateNombreUsuario("email",  $("#idemailagregar").val().trim())){
            $("#iddivemailmessage").html(' <b class="text-success">Disponible</b>&nbsp;<img src="img/check_si.png"/> ');
          }else {
            $("#iddivemailmessage").html(' <b class="text-error">Error!! Ya existe</b>');
          }
        }else{$("#iddivemailmessage").html(''); }
      });

      $('#myModal').on('hidden', function () {
          cleanTextAgregar();
      });
    }

    function guardarCambio(){

       if(validateAgregarUsuario("edit")){
        var urlS= "php/user.php";
        var strHtml = $("#idenviando").html();
        $("#idenviando").html('<img src="img/loading.gif"/>&nbsp;Cargando...');
        xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
          data: {type  : "updateUser", nombre : $("#idnombreagregar").val() , apellido: $("#idapellidoagregar").val(),
          nombreUsuario : $("#idnickagregar").val().trim(), telefono: $("#idtelefonoagregar").val().trim() ,email : $("#idemailagregar").val().trim(),
          cargo : $("#idcargoagregar").val().trim(), turno : $("#idturnoagregar").val().trim() ,cedula: $("#idcedulaagregar").val().trim(), id : dataLocal.id_user } ,
          async: false, cache:false, success: function(data){
            obtenerListaUsuario(1);
            setTimeout("cambiarColor("+dataLocal.id_user+")", 2000);
            $('#'+dataLocal.id_user).addClass("success");
            $("#idloadingdiv").html('<b class="text-success">El usuario ha sido Modificado</b>&nbsp;<img src="img/check_si.png"/>');
            $("#idenviando").html(strHtml);
            $('#myModal').modal('hide');

          }, error: function(xhrServicesTest, textStatus, errorThrown){
            alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
            console.log(""+textStatus);
            console.log(""+errorThrown);
          }
          });

      }

        return false;

    }

    function cambiarColor(id){
      $('#'+id).removeClass("success");
    }

    function guardarContrasena(){
      if($("#password-change").val() != $("#password-retry").val()){
         $("#message-error").html('<b class = "text-error" >Error!! Las contraseña son distintas</b>');
        return false;
      }
      if($("#password-change").val().length < 6){
         $("#message-error").html('<b class = "text-error" >Error!! La contraseña debe ser mayor a 6 caracteres</b>');
        return false;
      }

      var urlS= "php/login.php";
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {password: $("#password-change").val(), type  : "chance"}
        ,async: false, cache:false, success: function(result){
          if (result==null){
            alert("null");
          } else if (result== false ){
             $("#message-error").html("Error!! en base de datos");
            return false;
          } else if(result== true){
            location.href="home.php";

          }
      }, error: function(xhrServicesTest, textStatus, errorThrown){
        alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
        console.log(""+textStatus);
        console.log(""+errorThrown);
      }
      });
      return false;
    }
