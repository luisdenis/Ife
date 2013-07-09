  function obtenerListaMaquina(page){
      var urlS= "php/maquina.php";
      document.getElementById('idtabla').innerHTML = " ";
      document.getElementById('idloadingdiv').innerHTML = '<img id="loading" alt="Cargando" src="img/loading.gif" />&nbsp;Cargando....';


      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST", data: {type  : "getListMaquina", page : page, cant : cant,
        nodo : $("#idnodofilter").val().trim(),localizador: $("#idlocalizadorfilter").val().trim(), estacion : $("#idestacionfilter").val().trim(),
        direccion: $("#iddireccionfilter").val().trim() } ,async: false, cache:false, success: function(data){
        //onloadUserList(data);
        onloadMaquinaList(data);
        }, error: function(xhrServicesTest, textStatus, errorThrown){
          alert("No se pudo establecer comunicacion con el servidor.\ Por favor intenta de nuevo.");
          console.log(""+textStatus);
          console.log(""+errorThrown);
        }
        });
       document.getElementById('idloadingdiv').innerHTML = '';

    }

  function detailMaquina(id){

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

    function cleanTextMaquina(){
      $("#idnodofilter").val("");
      $("#idlocalizadorfilter").val("");
      $("#iddireccionfilter").val("");
      $("#idestacionfilter").val("");
    }

    function agregarMaquinaModal(){

      $('#myModal').modal('show');
      $('#idenviando').html('<button id = "Limpiar" class="btn btn-danger" type="button" onclick = "cleanTextMaquinaAgregar();">Limpiar</button> <button id = "guardar" class="btn btn-primary" type="submit"  >Guardar</button>');
      $('#myModalLabel').html('<img src="img/maquina_agregar.png">Agregar Maquina');
      $("#myModal").off("hidden");

      $('#formularioagregarmaquina').unbind('submit');
      $("#formularioagregarmaquina").submit(agregarMaquina);
       $('#myModal').on('hidden', function () {
        cleanMaquinaMessageError();
      });

    }
    function agregarComponente(){
    // Create our containing table
    if($("#idtablecomponente").html() == "undefined" || $("#idtablecomponente").html() == null || $("#idtablecomponente").html() == ""){
      var cant = 1;
      var table = document.createElement('table');
      table.setAttribute('id','idtablecomponente');
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
      thLabel.innerHTML = 'Descripción';
      thLabel = document.createElement('th');
      tr.appendChild(thLabel);
      thLabel.innerHTML = 'Operación';
      var tbody = document.createElement('tbody');
      tbody.setAttribute('id','idtablecomponentebody');
      table.appendChild(tbody);
    }
    if(document.getElementById("idtablecomponentebody") != null){
      var tbody = document.getElementById("idtablecomponentebody");
      var cant = document.getElementById('idtablecomponente').rows.length;
    }

    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    tr.setAttribute("id","c"+cant);
    var tdLabel1 = document.createElement('td');
    tr.appendChild(tdLabel1);
    tdLabel1.innerHTML = ''+cant;

    tdLabel1 = document.createElement('td');
    tr.appendChild(tdLabel1);
    tdLabel1.innerHTML = '<input type= "text" class = "input-medium" >';
    tdLabel1 = document.createElement('td');
    tr.appendChild(tdLabel1);
    tdLabel1.innerHTML = '<input type= "text" style="width : 30px;"  >';

    tdLabel1 = document.createElement('td');
    tr.appendChild(tdLabel1);
    tdLabel1.innerHTML = '<textarea  id="idobservacionagregar" style = "resize:none; width: 270px;"  placeholder="Ejemplo: Observacion del equipo" rows="4" ></textarea>';
    tdLabel1 = document.createElement('td');
    tr.appendChild(tdLabel1);
    tdLabel1.innerHTML = '<div align="center"><img onclick = "elimiarRowComponente(\'c'+cant+'\');" rel= "tooltip" title= "Eliminar" src="img/eliminar.png"></div>';
      document.getElementById("idListaComponente").appendChild(table);
    }

    function elimiarRowComponente(id){
    $('#'+id).remove();
    var str;
    for (var i=1;i<document.getElementById("idtablecomponente").rows.length;i++){
      document.getElementById("idtablecomponente").rows[i].cells[0].innerHTML  = ""+i;
      }
    }

   
    function validateMaquinaAgregar(action) {
      console.log("validateMaquinaAgregar");
      cleanMaquinaMessageError();

      re= /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
      ip = /^[^0]*([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}/
      var flagError = false;

         if($("#idnodoagregar").val().length == 0 ){
            $("#iddivnodomessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }

        if($("#idlogicalidagregar").val().length == 0 || isNaN($("#idlogicalidagregar").val())  ){
            $("#iddivlogicalidmessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }

         if($("#iddireccionagregar").val().trim().length == 0 || !ip.exec($("#iddireccionagregar").val()) ){
            $("#iddivdireccionmessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }

        if($("#idlocalizadorrxagregar").val().trim().length == 0 || isNaN($("#idlocalizadorrxagregar").val())  ){
            $("#iddivlocalizadorrxmessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }

        if($("#idlocalizadoragregar").val().trim().length == 0 || isNaN($("#idlocalizadoragregar").val()) ){
            $("#iddivlocalizadormessage").html(' <b class="text-error" > Error!! campo invalido</b>');
            flagError = true;
        }

        if(flagError) return false;
        return true;
    }

    function agregarMaquina(){
      console.log("agregarMaquina");
      var idestacion = document.getElementById("idestacion").value;
      if(validateMaquinaAgregar("agregar")){
      $("#idenviando").html('<img src="img/loading.gif"/>&nbsp;Cargando...');
         var urlS= "php/maquina.php";
          xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
            data: {type  : "setMaquina", nodo : $("#idnodoagregar").val() , logicalid: $("#idlogicalidagregar").val(),
            direccion : $("#iddireccionagregar").val().trim(), localizadorrx : $("#idlocalizadorrxagregar").val().trim() ,localizador: $("#idlocalizadoragregar").val().trim(), idestacion : ""+idestacion, estado : $("#idSelectEstado").val()} ,
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

    function cleanMaquinaMessageError(){
      $("#iddivnodomessage").html('');
      $("#iddivdireccionmessage").html('');
      $("#iddivlogicalidmessage").html('');
      $("#iddivlocalizadorrxmessage").html('');
      $("#iddivlocalizadormessage").html('');
    }


 function cleanTextMaquinaAgregar(){

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



    function eliminarMaquina(id,nombreLocal){
       if (confirm("¿Está seguro de eliminar a la maquina "+nombreLocal+" ?")) {
      // Respuesta afirmativa...
      var urlS= "php/maquina.php";
      xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
        data: {type  : "eliminarMaquina", id: id} ,
        async: false, cache:false, success: function(data){
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

    function modificarMaquina(id){

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
function guardarCambioMaquina(){
      
       if(validateMaquinaAgregar("edit")){
        var urlS= "php/maquina.php";
        var strHtml = $("#idenviando").html();
        $("#idenviando").html('<img src="img/loading.gif"/>&nbsp;Cargando...');
        xhrServicesTest = $.ajax({ url: urlS, dataType: 'json', type: "POST",
          data: {type  : "updateMaquina", nodo : $("#idnodoagregar").val() , logicalid: $("#idlogicalidagregar").val(),
            direccion : $("#iddireccionagregar").val().trim(), localizadorrx : $("#idlocalizadorrxagregar").val().trim()
            ,localizador: $("#idlocalizadoragregar").val().trim() , id : dataLocal.id_maquina } ,
          async: false, cache:false, success: function(data){
            obtenerListaMaquina(1);
            setTimeout("cambiarColor("+dataLocal.id_maquina+")", 2000);
            $('#'+dataLocal.id_maquina).addClass("success");
            $("#idloadingdiv").html('<b class="text-success">La Maquina ha sido Modificada</b>&nbsp;<img src="img/check_si.png"/>');
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