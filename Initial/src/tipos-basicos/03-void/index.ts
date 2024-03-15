/* eslint-disable */

// Informa que a função não retorna nada.

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Manaure', 'Vasconcelos');
