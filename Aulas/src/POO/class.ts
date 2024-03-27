/* eslint-disable */

// Maneira mais comum de criar objetos
// Um molde para criar objetos, depois que é criado o name e cnpj não é alterável.
export class Company {
  public readonly name: string; // atributo public é dispensável, pois ja seria inferido.
  private readonly collaborators: Collaborator[] = []; // private => acessível dentro da classe
  protected readonly cnpj: string; // readonly => Como "const", seu valor não pode ser reatribuído.

  constructor(name: string, cnpj: string) {
    // Atribui o valor aos atributos do obj
    this.name = name;
    this.cnpj = cnpj;
  }

  public addCollaborator(collaborator: Collaborator): void {
    // public opcional
    // add colaborador
    this.collaborators.push(collaborator);
  }
  showCollaborator(): void {
    // Recebe o array e exibe cada colaborador
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

// Uma class também pode servi como tipo, além do construtor do objeto.
// Maneira mais simples de criar um objeto.
export class Collaborator {
  constructor(
    // Nesse caso o atributo public deve ser usado.
    public readonly name: string,
    public readonly surname: string,
    private readonly years: number,
  ) {}
}

const apple = new Company('Apple', '11.222.333/4444-55');
const collaborator1 = new Collaborator('Manaure', 'Vasconcelos', 26);
apple.addCollaborator(collaborator1);
const collaborator2 = new Collaborator('Millene', 'Soares', 24);
apple.addCollaborator(collaborator2);
const collaborator3 = new Collaborator('Gilda', 'Sousa', 50);
apple.addCollaborator(collaborator3);

console.log(apple);
console.log(apple.name);
apple.showCollaborator();
