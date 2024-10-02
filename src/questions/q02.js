export function pertenceFibonacci(numero) {
  let primeiroValor = 0, segundoValor = 1, temp;

  if (numero === 0 || numero === 1)
    return `O número ${numero} pertence à sequência de Fibonacci.`;

  while (segundoValor < numero) {
    temp = primeiroValor + segundoValor;
    primeiroValor = segundoValor;
    segundoValor = temp;
  }

  if (segundoValor === numero)
    return `O número ${numero} pertence à sequência de Fibonacci.`;

  return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

// let numero = 21;
// console.log(pertenceFibonacci(numero));
