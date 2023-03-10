let numeros = [10, 23, 35, 42, 55];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numeros.push(numeros[i] + 1);
  } else {
    numeros.splice(i, 1);
    i--;
  }
}

console.log(numeros);