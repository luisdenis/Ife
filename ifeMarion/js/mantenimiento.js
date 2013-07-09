  function obtenerListaMaquinaMantenimiento(page){
      var urlS= "php/mantenimiento.php";
      document.getElementById('idtabla').innerHTML = " ";
      document.getElementById('idloadingdiv').innerHTML = '<img id="loading" alt="Cargando" src="img/loading.gif" />&nbsp;Cargando....';
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "getListMaquinaMantenimiento", page : page, cant : cant,
        nodo : $("#idnodofilter").val().trim(), nombreUsuario :$("#idusuariofilter").val() , estacion : $("#idestacionfilter").val().trim() } ,async: false, cache:false, success: function(data){
        //onloadUserList(data);
        onloadMatenimientoList(data);
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
       document.getElementById('idloadingdiv').innerHTML = '';
    }

    function detailMantenimiento(id){

    $("#myModal").off("hidden");
    $('#myModal').modal('show');
    $('#formularioagregarmaquina').unbind('submit');
    $('#idenviando').html('<button id = "submit" class="btn btn-primary" type="submit">Guardar Cambios</button>');
    $("#formularioagregarmaquina").submit(guardarCambioMaquina);
    $('#myModalLabel').html('<img src="img/maquina_editar.png">Modificar Maquina');

    var urlS= "php/maquina.php";
    xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
      data: {type  : "getMaquinaById", id : ""+id} , async: false, cache:false, success: function(data){
          $("#idlocalizadoragregar").val(data.localizador);
          $("#idlocalizadorrxagregar").val(data.localizador_rx);
          $("#idlogicalidagregar").val(data.logical_id);
          $("#iddireccionagregar").val(data.direccion_ip);
          $("#idnodoagregar").val(data.nodo);
          dataLocal = data;
      }, error: function(xhrServicesTest, textStatus, errorThrown){
        alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
        console.log(""+textStatus);
        console.log(""+errorThrown);
      }
      });
    $('#myModal').on('hidden', function () {
        cleanTextMaquinaAgregar();
    });
  }

   function agregarMantenimientoModal(){

      $('#myModal').modal('show');
      $('#idenviando').html('<button id = "Limpiar" class="btn btn-danger" type="button" onclick = "cleanTextMantenimientoAgregar();">Limpiar</button> <button id = "guardar" class="btn btn-primary" type="submit"  >Guardar</button>');
      $('#myModalLabel').html('<img src="img/maquina_mantenimiento.png">Registrar Mantenimiento');
      $("#myModal").off("hidden");
      $("#idSelectestacion").off("change");


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


      $('#formularioagregarmantenimiento').unbind('submit');
      $("#formularioagregarmantenimiento").submit(agregarMantenimiento);
       $('#myModal').on('hidden', function () {
        cleanMaquinaMessageError();
      });



    }

     function agregarMantenimiento(){
      var idestacion = document.getElementById("idestacion").value;
      if(validateMaquinaAgregar("agregar")){
      $("#idenviando").html('<img src="img/loading.gif"/>&nbsp;Cargando...');
         var urlS= "php/maquina.php";
          xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
            data: {type  : "setMaquina", nodo : $("#idnodoagregar").val() , logicalid: $("#idlogicalidagregar").val(),
            direccion : $("#iddireccionagregar").val().trim(), localizadorrx : $("#idlocalizadorrxagregar").val().trim() ,localizador: $("#idlocalizadoragregar").val().trim(), idestacion : ""+idestacion} ,
            async: false, cache:false, success: function(data){
            cleanTextMaquinaAgregar();
            obtenerListaMaquina(1);
            $("#idloadingdiv").html('<b class="text-success">La Maquina ha sido registrada</b>&nbsp;<img src="img/check_si.png"/>');
            $("#idenviando").html(strHtml);
            $('#myModal').modal('hide');
            }, error: function(xhrServicesTest, textStatus, errorThrown){
              alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
              console.log(""+textStatus);
              console.log(""+errorThrown);
            }
            });
      }
      console.log("agregarMaquina");
      return false;
    }

    function cleanTextMantenimiento(){
      $("#idnodofilter").val("");
      $("#idusuariofilter").val("");
      $("#idestacionfilter").val("");
    }
     function cleanMaquinaMessageError(){
      $("#iddivnodomessage").html('');
      $("#iddivdireccionmessage").html('');
      $("#iddivlogicalidmessage").html('');
      $("#iddivlocalizadorrxmessage").html('');
      $("#iddivlocalizadormessage").html('');
    }

     function cleanTextMantenimientoAgregar(){

      $("#iddivnodomessage").html('');
      $("#iddivdireccionmessage").html('');
      $("#iddivlogicalidmessage").html('');
      $("#iddivlocalizadorrxmessage").html('');
      $("#iddivlocalizadormessage").html('');

      $("#idlocalizadoragregar").val('');
      $("#idlocalizadorrxagregar").val('');
      $("#idlogicalidagregar").val('');
      $("#iddireccionagregar").val('');
      $("#idnodoagregar").val('');
    }

