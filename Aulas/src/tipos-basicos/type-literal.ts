let x = 10; // Multavel
x = 20; // Reasigna valores do msm type
x = 0b1010;
const y = 100; // Aqui é um typo literal, pq o y é : 100
let a = 100 as const; // Aqui tbm é literal, outra sintaxe mas que tem a mesma finalidade. Nesse caso é melhor usar const

const pessoa = {
  nome: 'Manaure' as const, // Quando voce quer usar uma variável ou elemento seja literal / constante.
  sobrenome: 'Vasconcelos',
};
/* 
  nome: 'Manaure,
  sobrenome': string
*/
