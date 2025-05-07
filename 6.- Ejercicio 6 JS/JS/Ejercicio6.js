// Cadena original
let texto = "Hola, este es un ejemplo";
let longitudDeseada = 30;

// Si el texto tiene menos de 30 caracteres, añadimos puntos
while (texto.length < longitudDeseada) {
  texto += ".";
}

// Mostrar resultado en pantalla
document.getElementById("resultado").innerHTML = texto;
