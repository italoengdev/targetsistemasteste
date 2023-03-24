// solicita um número ao usuário
const numero = parseInt(prompt("Digite um número:"));

// inicializa as variáveis de início da sequência
let a = 0;
let b = 1;

// variável de controle para verificar se o número pertence à sequência
let encontrado = false;

// verifica se o número pertence à sequência
while (b <= numero) {
  if (b === numero) {
    encontrado = true;
    break;
  }

  // atualiza os valores de a e b para o próximo número na sequência
  const proximo = a + b;
  a = b;
  b = proximo;
}

// exibe a mensagem informando se o número pertence ou não à sequência
if (encontrado) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
