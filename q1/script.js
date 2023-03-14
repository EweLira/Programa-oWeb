const verificarBotao = document.getElementById("botao");

verificarBotao.addEventListener("click", function() {
  const nota = document.getElementById("nota").value;

  if (nota < 0 || nota > 10 ) {
    alert("Nota inválida. Digite uma nota entre 0 e 10.");
    document.getElementById("nota").value = " ";
  } else {
    alert("Nota válida: " + nota);
    document.getElementById("nota").value = "";
  }
});