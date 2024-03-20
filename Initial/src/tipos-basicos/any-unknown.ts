/* eslint-disable */
// Utilizar em ultimo caso.
// Dessa forma, a msg está sendo passada por parâmetro mas não recebeu nenhum tipo e o TS não consegue tipar automaticamente, então fica implícito.
// Voce pode usar o tipo "any" quando voce quer que receba qualquer tipo intencionalmente.
function showMessage(msg) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('alo som'));
console.log(showMessage(2024));

function showMessage2(msg: any) {
  return msg;
}

console.log(showMessage2([1, 2, 3]));
console.log(showMessage2('alo som'));
console.log(showMessage2(2024));

// Unknown

let x; // declarado como any pode receber qualquer valor que não da erro
x = 500;
x = 'Manaure';
x = '10';
let y = 800;
console.log(x + y); // o X sendo any pode ocorrer de não ser o valor esperado, mas o TS não sinaliza erro algum.

let z: unknown
z = 10 // ao declarar unknown o tipo não muda mesmo inferindo valores de outros tipos.
console.log(y + z) // exibe erro caso não use nenhuma verificação antes do uso da variável

// Oque difere do any é que o unknown exige uma verificação antes da utilização do valor.
if(typeof z === 'number') console.log(z+ y) // verifiquei a variável e então não existe mais o erro.