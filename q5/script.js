let a, b, taxaA, taxaB;
let infoDiv = document.getElementById("info");

do {
  a = parseInt(prompt("Informe a população do país A: "));
  while (isNaN(a) || a <= 0) {
    a = parseInt(prompt("População inválida. Informe novamente a população do país A: "));
  }

  b = parseInt(prompt("Informe a população do país B: "));
  while (isNaN(b) || b <= 0) {
    b = parseInt(prompt("População inválida. Informe novamente a população do país B: "));
  }

  taxaA = parseFloat(prompt("Informe a taxa de crescimento da população do país A (em %): "));
  while (isNaN(taxaA) || taxaA <= 0) {
    taxaA = parseFloat(prompt("Taxa de crescimento inválida. Informe novamente a taxa de crescimento da população do país A (em %): "));
  }
  taxaA = taxaA / 100;

  taxaB = parseFloat(prompt("Informe a taxa de crescimento da população do país B (em %): "));
  while (isNaN(taxaB) || taxaB <= 0) {
    taxaB = parseFloat(prompt("Taxa de crescimento inválida. Informe novamente a taxa de crescimento da população do país B (em %): "));
  }
  taxaB = taxaB / 100;

  let ano = 0;
  while (a <= b) {
    a += a * taxaA;
    b += b * taxaB;
    ano++;
  }
  console.log("A ultrapassa ou iguala a população de B em " + ano + " anos.");
  infoDiv.innerHTML += `A ultrapassa ou iguala a B em ${ano} anos.`;



  let repetir = prompt("Deseja repetir a operação? (S/N)").toUpperCase();
  while (repetir !== "S" && repetir !== "N") {
    repetir = prompt("Opção inválida. Deseja repetir a operação? (S/N)").toUpperCase();
  }

  if (repetir === "N") {
    console.log("Programa encerrado.");
  }
} while (repetir === "S");
