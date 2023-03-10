let numeros = '';
let infoDiv = document.getElementById("info");

for (let i = 1; i <= 20; i++) {
  infoDiv.innerHTML += "<p>Contagem: " + i + "</p>";
}

for (let i = 1; i <= 20; i++) {
  numeros += i + ' ';
}
infoDiv.innerHTML += "<p>Contagem lado a lado: " + numeros + "</p>";