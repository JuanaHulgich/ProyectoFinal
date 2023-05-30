function esMayorDeEdad(x) {
  if (x >= 18) return true;
  else return false;
}

function esMayor() {
  alert("Eres mayor de edad, ingreso aprobado");
}

function esMenor() {
  alert("Eres menor de edad, no puedes ingresar");
  window.location.href = "https://www.google.com";
}

const EdadDelUsuario = parseInt(prompt("¿Cual es tu edad?"));
if (esMayorDeEdad(EdadDelUsuario)) {
  esMayor();
} else {
  esMenor();
}

console.log(EdadDelUsuario);
