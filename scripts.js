/*
Grouping Operator
Nesta aula, foi abordado o uso do Group Operator, representado pelos parênteses, para definir a ordem de procedência das operações. Foi exemplificado como a utilização dos parênteses pode alterar o resultado de uma expressão matemática, priorizando determinadas operações. Foi mostrado um exemplo de cálculo de média, destacando a importância de definir a ordem das operações matemáticas. O Group Operator é uma ferramenta essencial para determinar a sequência correta de cálculos em JavaScript e outras linguagens de programação.
*/

let x = 10;
let y = 20;
let z = 30;

console.log(x + y * z);

console.log((x + y) * z);

console.log(x + (y * z));

console.log(x + y * z);
