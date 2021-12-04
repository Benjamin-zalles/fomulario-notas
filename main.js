function resultado() {
  var primerParcial = document.querySelector("#primerParcial").value;
  var segundoParcial = document.querySelector("#segundoParcial").value;
  var tercerParcial = document.querySelector("#tercerParcial").value;
  var cuartoParcial = document.querySelector("#cuartoParcial").value;
  var notaDeAprobacion = 204;

  var primero = parseInt(primerParcial);
  var segundo = parseInt(segundoParcial);
  var tercero = parseInt(tercerParcial);
  var cuarto = parseInt(cuartoParcial);

  if (primero + segundo + tercero + cuarto > notaDeAprobacion) {
    tuNota = ("Estas aprobado 👍");
  } else if (primero + segundo + tercero + cuarto ==  notaDeAprobacion) {
    tuNota = ("Pasaste raspando 😅");
  } else if (primero + segundo + tercero + cuarto < notaDeAprobacion) {
    tuNota = ("Estas reprobado 😥");
  };

  document.getElementById("tu_nota").innerHTML = tuNota;
  document.getElementById("total").innerHTML = (primero + segundo + tercero + cuarto) / (4);

};

document.getElementById("btn").addEventListener("click", resultado);

