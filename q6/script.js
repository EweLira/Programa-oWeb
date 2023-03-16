function vertical() {
  let output = '';
  for (let i = 1; i <= 20; i++) {
    output += i + '<br>';
  }
  document.getElementById('numeros').innerHTML = output;
}

function horizontal() {
  let output = '';
  for (let i = 1; i <= 20; i++) {
    output += i + ' ';
  }
  document.getElementById('numeros').innerHTML = output;
}