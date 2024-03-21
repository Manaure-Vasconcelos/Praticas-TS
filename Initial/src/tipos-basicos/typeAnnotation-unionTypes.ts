/* eslint-disable */

// Inferência de types => : type
// Se for algo obvio a ser inferido, o eslint "reclama" e não deixa usar a type annotation, como nos exemplos abaixo.

let nome: string = 'manaure';
let idade: number = 26;
let souFoda: boolean = true;
let simbolo: symbol = Symbol('qualquer');
let big: bigint = 10n;

// Array
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['manaure', 'millene'];

// Object
let people: { name: string; years: number; adult?: boolean } = {
  name: 'manaure',
  years: 26,
};

// Function
//          inferencia de parametro / retorno da função
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

// Union types                                                    ou
// usa o operador | para dizer que a variável ou retorno é number | string
function addOrConcat(x: number | string, y: number | string){
  if(typeof x === 'number' && typeof y === 'number') return x + y;
  if(typeof x === 'string' && typeof y === 'string') return x + y; // Se adc essa segunda linha e retirar a seguinte, o retorno da função será 3 opções => string, number, undefined
  return ` ${x} + ${y} string`; // ao adc essa linha, abrange as outras possibilidades e elimina o undefined.
}

console.log(addOrConcat(10 ,20))
console.log(addOrConcat('10' ,'20'))
console.log(addOrConcat(10 ,'20'))
console.log(addOrConcat('10' ,20))
