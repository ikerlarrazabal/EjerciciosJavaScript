// Variable que almacena el número de veces que se iterará
let numero = 5;
let contador = 0;
let resultado = "";

// Bucle while que itera mientras contador sea menor que numero
while (contador < numero) {
  resultado += `Iteración número ${contador + 1}<br>`;
  contador++;
}

// Mostrar resultado en la página
document.getElementById("resultado").innerHTML = resultado;
