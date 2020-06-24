Correo = document.getElementById('Email');
Nombre = document.getElementById('Nombre');

function Limpiar(){
document.getElementsByClassName('info').remove();
}

function Eliminar(){
    document.getElementById('data').remove();
}


function Enviar(){
   var email = document.getElementById('Email').value;
   var nombre = document.getElementById('Nombre').value;


    Tabla = document.getElementById('datos');

    var row = Tabla.insertRow(0+1);
  var cell = row.insertCell(0);
  var cell1 = row.insertCell(1);



  cell.innerHTML = "<p name = nombre_t class = 'nombre' >"+ email +"</p>";
  cell1.innerHTML = "<p name = cedula_t class = 'nombre' >"+ nombre +"</p>";
event.preventDefault();
}

