function validar() {
  let nombre, apellido, email, telefono;

  nombre = document.getElementById("txtnom").value;

  let patron = /^[a-zA-ZñÑ]{2}[a-zA-ZñÑ\s]*$/;

  if (!patron.test(nombre)) {
    alert("Ingrese el nombre");
    return;
  }

  

  email = document.getElementById("txtemail").value;
  patron = /^(\w+[\w\d._]*)@([a-z]{5,20}).([a-z]{2,3})$/;
  if (patron.test(email) == false) {
    alert("Ingrese un correo valido");
    return;
  }

  telefono = document.getElementById("txttelf").value;

  patron = /^[789][0-9]{6,8}$/;
  if (patron.test(telefono) == false) {
    alert("Ingrese el numero de celular");
    return;
  }

  alert("Has ingresado correctamente");
}

document.getElementById("btnenviar").setAttribute("onclick", "validar()");
