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
