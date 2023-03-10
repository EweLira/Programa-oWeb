let nome, idade, salario, sexo, estCivil;
let dadosUsuarioDiv = document.getElementById("dados-usuario");

//Validar nome
do{
  nome = prompt("Digite o nome do usúario:");
  if(nome.length <= 3){
    alert("você precisa digitar um nome com mais de três caracteres");
  }
} while (nome.length <= 3);

//Validar idade
do {
  idade = parseInt(prompt("Digite a idade: "))
  if (idade < 0 || idade > 150) {
    alert("A idade deve estar entre 0 e 150 anos");
  }
} while (idade < 0 || idade > 150);

//Validar salário
do {
  salario = parseFloat(prompt("Digite o salário do usuário"));
  if ( salario <= 0){
    alert("O salário deve ser maior do que zero");
  }
} while (salario <= 0);

//Validar Sexo

do {
  sexo = prompt("Digite o sexo(F ou M): ");
  if(sexo.toUpperCase() !== "F" && sexo.toUpperCase() !== "M"){
    alert("Você precisa digitar F ou M");
  }
} while(sexo.toUpperCase() !== "F" && sexo.toUpperCase() !== "M");

// Validar estado civil

do {
  estCivil = prompt("Digite o estado civil (C, S, V ou D):");
  if (
    estCivil.toUpperCase() !== "C" &&
    estCivil.toUpperCase() !== "S" &&
    estCivil.toUpperCase() !== "V" &&
    estCivil.toUpperCase() !== "D"
  ) {
    alert("Você precisa digitar C, S, V ou D");
  }
} while (
  estCivil.toUpperCase() !== "C" &&
  estCivil.toUpperCase() !== "S" &&
  estCivil.toUpperCase() !== "V" &&
  estCivil.toUpperCase() !== "D"
);

// Exibir os dados validados

dadosUsuarioDiv.innerHTML += "<p>Nome do usuário: " + nome + "</p>";
dadosUsuarioDiv.innerHTML += "<p>Idade do usuário: " + idade + " anos</p>";
dadosUsuarioDiv.innerHTML += "<p>Salário do usuário: " + salario + "</p>";
dadosUsuarioDiv.innerHTML += "<p>Sexo do usuário: " + sexo + "</p>";
dadosUsuarioDiv.innerHTML += "<p>Estado civil do usuário: " + estCivil + "</p>";