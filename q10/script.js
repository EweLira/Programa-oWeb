function gerarNumeros() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  
  
  var menor = num1 < num2 ? num1 : num2;
  var maior = num1 > num2 ? num1 : num2;
  
  var numeros = "";
  for (var i = menor; i <= maior; i++) {
    numeros += i + " ";
  }
  

  alert("Os números inteiros entre " + menor + " e " + maior + " são: " + numeros);
}