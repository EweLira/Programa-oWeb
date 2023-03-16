function calcularAnos() {
  let popA = Number(document.getElementById("popA").value);
  let taxaA = Number(document.getElementById("taxaA").value);
  let popB = Number(document.getElementById("popB").value);
  let taxaB = Number(document.getElementById("taxaB").value);

  let anos = 0;
  while (popA < popB) {
    popA = popA * (1 + taxaA/100);
    popB = popB * (1 + taxaB/100);
    anos++;
    
  }
  alert("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");
  
}
