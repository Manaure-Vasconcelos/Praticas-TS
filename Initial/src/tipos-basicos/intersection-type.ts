// & => and
type HaveName = { name: string };
type HaveSurname = { surname: string };
type HaveYears = { years: number };
export type Person = HaveName & HaveSurname & HaveYears;
// O objeto pessoa está sendo criado e recebe nome E sobrenome E idade. 
// Não é opcional, deve conter todos os types utilizados.
const person: Person = {
  name: 'Manaure',
  surname: 'Vasconcelos',
  years: 26,
}

// Outra maneira de uso.
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD; // Intersection: A => pq é o elemento que se repete em todos os types.