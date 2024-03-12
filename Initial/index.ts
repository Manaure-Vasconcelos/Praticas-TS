abstract class Animal {
  abstract makeNoise(): void;
}

class Dog extends Animal {
  constructor(private readonly name: string) {
      super();
  }
  makeNoise(): void {
      console.log(`${this.name} is barking`);
  }
}

class Cat extends Dog {
  private years: number;

  constructor(private readonly name: string, years: number) {
      super();
      this.years = years
  }
  sayYears(): void {
      console.log(`${this.name} have a ${this.years} years.`)
  }
}

const dog = new Dog('manaure')
dog.makeNoise();

const cat = new Cat('millene', 24)
cat.makeNoise();
cat.sayYears();

/* Se não for definido a tipagem o proprio TS faz a tipagem de acordo com o type do valor recebido. */

const Pessoa = {
  nome: 'manaure',
  sobrenome: 'vasconcelos',
  idade: 26
}

console.log(Pessoa)