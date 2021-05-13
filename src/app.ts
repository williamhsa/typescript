class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];  //agora essa propriedade é acessivel apenas de dentro da classe.

  constructor(private readonly id: string, public name: string) { }; // outra maneira de inicializacao e criacao de propriedades.
  // o modificador readonly só deixa alterar na inicializacao, depois eu nao consigo mudar essa propriedade em nenhuma lugar do codigo.
  // constructor(idIn: string, nameIn: string) {
  //   this.id = idIn;
  //   this.name = nameIn;
  // };

  describe() {
    console.log('Department: ' + this.name + '\nid:' + this.id);
  };

  addEmployee(employee: string) {
    this.employees.push(employee);
  };

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }


}

const accounting = new Department('123', 'Accounting')
console.log("🚀 ~ file: app.ts ~ line 9 ~ accounting", accounting)

accounting.addEmployee('will');
accounting.addEmployee('isa');
// accounting.employees[2] = 'tupa';
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();