// Cria uma variável que carrega o tipo.
type Old = number;
type Person = {
  name: string;
  surname: string;
  years: number;
  salary: number;
  favoriteColor?: string;
};
type ColorRGB = 'red' | 'green' | 'blue';
type ColorCMYK = 'ciano' | 'magenta' | 'yellow';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'John',
  surname: 'Sousa',
  years: 20,
  salary: 10_000,
};

function FavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(FavoriteColor(person, 'blue'));
