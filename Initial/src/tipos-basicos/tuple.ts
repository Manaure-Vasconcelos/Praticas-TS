/* eslint-disable */

const dataClient1: [number, string] = [1, 'Manaure']; // Sintaxe basica
const dataClient2: [number, string, string] = [1, 'Manaure', 'Vasconcelos']; // Caso precise de outro valor tem que inferir
const dataClient3: [number, string, string?] = [1, 'Manaure']; // ao usar '?' torna-se opcional o valor
const dataClient4: [number, string, ...string[]] = [1, 'Manaure']; // rest operator infere o valor escolhido para os restante do array

dataClient1[0] = 2; // Pode reatribuir o valor com tanto que seja o msm tipo
dataClient1[0] = 'Ronaldo'; // Se for tipo diferente ou em um index que não existente não aceita

dataClient1.pop(); // Nesse caso o TS não reconhece o .pop() e com isso burla e remove o elemento sem causar error. ATENÇÂO
const array: readonly string[] = ['Manaure', 'Millene']; // Para corrigir esse erro, se o array não for mutavel, usar o readonly, assim o TS reconhece o erro.
const array2: ReadonlyArray<string> = ['Manaure', 'Millene'];
array.pop();
