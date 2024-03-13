abstract class Animal {
  abstract makeNoise(): void;
}

class Dog extends Animal {
  constructor(readonly name: string) {
    super();
  }
  makeNoise(): void {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Dog {
  private years: number;
  constructor(
    readonly name: string,
    years: number,
  ) {
    super(name);
    this.years = years;
  }
  sayYears(): void {
    console.log(`${this.name} have a ${this.years} years.`);
  }
}

const dog = new Dog('manaure');
dog.makeNoise();

const cat = new Cat('millene', 24);
cat.makeNoise();
cat.sayYears();

const Pessoa = {
  nome: 'manaure',
  sobrenome: 'vasconcelos',
  idade: 26,
};

console.log(Pessoa);
