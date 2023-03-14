const form = document.querySelector('form');
const usuarioInput = document.querySelector('#usuario');
const senhaInput = document.querySelector('#senha');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = usuarioInput.value.trim();
  const senha = senhaInput.value.trim();

  if (senha === usuario) {
    alert("Senha não pode ser igual ao nome");
  } else {
    alert("Login realizado!");
    form.submit();
  }
  
  senhaInput.value = '';
});