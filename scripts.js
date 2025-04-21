/*
Ordem de Precedência
Na programação, assim como na matemática, a ordem de precedência é fundamental para definir a sequência de operações a serem realizadas em uma expressão. A ordem de precedência determina qual operação será executada primeiro em expressões com múltiplos operadores. É importante conhecer a ordem de precedência para evitar erros de cálculo. Parênteses podem ser utilizados para alterar a ordem de execução das operações. Compreender a ordem de precedência é essencial para desenvolver aplicações precisas e evitar equívocos nos cálculos.
*/

let x = 10;
let y = 20;
let z = 30;

console.log(x + y * z);

console.log((x + y) * z);

console.log(x + (y * z));

console.log(x + y * z);
