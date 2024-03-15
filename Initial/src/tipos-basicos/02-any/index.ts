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