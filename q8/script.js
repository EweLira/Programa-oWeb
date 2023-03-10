let soma = 0;
let infoDiv = document.getElementById("info");

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  soma += numero;
}

let media = soma / 5;

infoDiv.innerHTML += "<p>A soma dos números é: " + soma + "</p>";
infoDiv.innerHTML += "<p>e a média é: " + media + "</p>";