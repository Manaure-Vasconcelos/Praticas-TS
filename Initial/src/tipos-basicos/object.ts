/* eslint-disable */

// const obgA: string = {}                      forma errada
// const obgA: object = {}                      forma errada
// const obgA: {} = {}                          forma errada
// const obgA: Record<string, unknown> = {}     Correta
// const obgA = {}                              Correta / Dessa forma o próprio TS faz a tipagem, mas não pode assignar um novo obj
// da maneira mostrada no código é a mais correta, assim permitindo assignar novos valores ou não.
// Pode reasignar o valor da chave com um valor da mesma tipagem

const objA: {
  key: string;
  key2: string;
  key3?: string;
  [key: string]: unknown;
} = {
  key: 'anyValue',
  key2: 'anyValue2',
};

objA.key = 'newValue';
objA.key3 = 'newValue';
objA.key4 = 'newValue';
