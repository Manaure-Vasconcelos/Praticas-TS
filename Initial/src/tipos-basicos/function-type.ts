/* eslint-disable */

type MapStringCallback = (item: string) => string; // type alias da função

// Função que recebe dois parâmetros => array e uma função.
function mapString(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i])); // usa a callback function e retorna o resultado da mesma.
    // que no caso é .toUpperCase()
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase()); // É passado os parâmetros
// da função.

console.log(abc);
console.log(abcMapped);
