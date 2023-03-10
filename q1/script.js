let nota;

do {
  nota = window.prompt("Digite uma nota entre 0 e 10:");

  if (nota < 0 || nota > 10) {
    alert("Nota inválida. Digite uma nota entre 0 e 10.");
  }
} while (nota < 0 || nota > 10);

alert("Nota válida: " + nota);