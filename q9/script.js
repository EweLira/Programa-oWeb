let infoDiv = document.getElementById("info");
let numerosImpares = "";

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    numerosImpares += i + " ";
  }
} 
infoDiv.innerHTML += "<p>Números ímpares entre 1 e 50 é: " + numerosImpares + "</p>";