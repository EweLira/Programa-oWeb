let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let infoDiv = document.getElementById("info");
let numeros = "";

if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    numeros += i + " ";
  }
} else if (num1 > num2) {
  for (let i = num2 + 1; i < num1; i++) {
    numeros += i + " ";
  }
} else {
  alert("Os números são iguais!");
}
infoDiv.innerHTML += "<p>Números inteiros que estão no intervalo: " + numeros + "</p>";