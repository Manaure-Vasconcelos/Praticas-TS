/* eslint-disable */

// Informa que a função não retorna nada.

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Manaure', 'Vasconcelos');

// Muito parecido com o void, mas o "never" eu quero informar que nunca vai retornar nada. 
// Loop infinito?? 
// Quando quero retornar um error

function createError(): never {
  throw new Error('Error')
}

createError()
