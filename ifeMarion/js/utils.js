 var xhrServicesTest,dataLocal, cant = 10;
 var nombre,apellido,cedula,turno,cargo, list,currentActivity;


function cambiarCant(cantLocal){
    cant = cantLocal;
    $("#bottonCount").html(cant);
    var strCant = "";
    for (i=10; i<=50; i = i+10){
    if (cant == i)
    strCant = strCant+'<li class= "active" ><a>'+i+'</a></li>';
    else strCant = strCant+'<li ><a href="#" onclick="cambiarCant('+i+'); return false;"     >'+i+'</a></li>';
    }
    $("#idulnumberpage").html(strCant);
    return false;
}

 function fecha(){
      fecha = new Date()
      mes = fecha.getMonth()
      diaMes = fecha.getDate()
      diaSemana = fecha.getDay()
      anio = fecha.getFullYear()
      dias = new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado')
      meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')
      strFecha = ''+dias[diaSemana] + ", " + diaMes + " de " + meses[mes] + " de " + anio+'';
      return strFecha;
    }

function getCookie(c_name){
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function setCookie(c_name,value,exdays){
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function checkCookie(){
currentActivity=getCookie("currentActivity");
if (currentActivity!=null && currentActivity!="")
  {
  alert("Welcome again " + currentActivity);
  }
else{
  currentActivity=prompt("Please enter your name:","");
  if (currentActivity!=null && currentActivity!="")
    {
    setCookie("currentActivity",currentActivity,2);
    }
  }
}