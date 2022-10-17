function proceso() {
  let alimentos = document.querySelectorAll('input[type="checkbox"]:checked');
  let acum = 0;

  for (let i = 0; i < alimentos.length; i++) {
    acum += parseFloat(alimentos[i].value);
  }
  document.getElementById("txtresultado").value = acum;
}

document.getElementById("boton").setAttribute("onclick", "proceso()");
