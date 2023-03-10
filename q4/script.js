let a = 80000;
let b = 200000;
let ano = 0;
let infoDiv = document.getElementById("info");

while (a <= b){
  a += a * 0.03;
  b += b * 0.015;
  ano += 1;
}
infoDiv.innerHTML += `A ultrapassa ou iguala a B em ${ano} anos.`;

