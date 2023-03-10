let usuario, senha;

do {
  usuario = prompt("Digite o nome de usuário:");
  senha = prompt("Digite a senha:");

  if (usuario !== null && senha !== null) {
    if (usuario === senha) {
      alert("Senha não pode ser igual ao nome");
    } else {
      alert("Login realizado!");
    }
  }
} while (usuario === senha || usuario === null || senha === null);