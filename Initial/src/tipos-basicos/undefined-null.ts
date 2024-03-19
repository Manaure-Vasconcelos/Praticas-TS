/* eslint-disable */
// Em termo de significado é o mesmo, a ausência de valor.

// Pode ser usado para fazer uma checagem inversa.
// Checa se é undefined / ja teve origem undefined do próprio código.
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(
  firstName: string,
  lastName: string,
): {
  firstName: string;
  lastName?: string; // ao declarar a variavel como opcional, ela se torna string / undefined. Pq pode receber os dois valores.
} {
  return {
    firstName,
    lastName, // string / undefined
  };
}

// Caso tenha uma função que propositalmente retorna null como valor.
// Pode ser feito assim: retorna o valor multiplicado caso o valor seja number, se não retorna null e exibe sinal de erro.
function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);          // Aqui ele passa no teste
const squareOfTwoString = squareOf('2');  // Aqui ele não passa no teste e levanta erro

squareOfTwo === null ? console.log('conta invalida') : console.log(squareOfTwo * 100)
squareOfTwoString === null ? console.log('conta invalida') : console.log(squareOfTwoString * 100)
