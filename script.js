// Escreva um programa que receba um número inteiro \(N\) do usuário e exiba os primeiros \(N\) 
// números da Sequência de Fibonacci. 
// A sequência começa com 0 e 1, e cada termo seguinte é a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, 13...).

const numeroUsuarioFibonaci = 10;
let numeroA = 0;
let numeroB = 1;
let proximo = null;

for (let contador = 0; contador < numeroUsuarioFibonaci; contador = contador + 1){
    proximo = numeroA + numeroB;
    numeroA = numeroB;
    numeroB = proximo;
    console.log(numeroA);
}


 