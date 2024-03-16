// Existem duas maneiras de tipas Array
// Observe que se uma variavel receber o resultado da função o proprio ts vai tipar a variavel.

function mutipleNumbers(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatChars(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = mutipleNumbers(1, 2, 3);
const result2 = concatChars('a', 'b', 'c');

console.log(result);
console.log(result2);
