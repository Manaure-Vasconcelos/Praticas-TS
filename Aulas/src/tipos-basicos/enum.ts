/* eslint-disable */

// Uma loucura kkk
// Se colocar apenar o nome, o TS adc o índice automaticamente.
// Pode asignar o índice
enum Colors {
  amarelo, // 0
  vermelho, // 1
  azul, // 2
}

console.log(Colors.amarelo) // acessando pelo nome => retorna o índice
console.log(Colors[0]) // acessando pelo índice => retorna o nome

// Pode criar outro enum com o mesmo nome, e no final eles se mesclam.
enum Colors {
  roxo = 'roxo', // pode atribuir string como índice
  verde = 201,  // pode mesclar os índices, string e number no mesmo enum
  rosa, // Se não atribuir um indice para o valor, o TS atribui automaticamente com base no índice do valor anterior, se for string segue string, number segue number
}

function getColors(color: Colors): void {
  console.log(Colors[color])
}

// Passando os valores por parâmetro.
getColors(Colors.verde) // string
getColors(201) // índice
getColors(203) // se não existir ele avisa erro