const EdadDelUsuario = parseInt(prompt("¿Cual es tu edad?"));
if (EdadDelUsuario >= 18) {
  alert("Eres mayor de edad, ingreso aprobado");
} else {
  alert("Eres menor de edad, no puedes ingresar");
  window.location.href = "https://www.google.com";
}

console.log(EdadDelUsuario);
