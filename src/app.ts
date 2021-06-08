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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT') // super chama o construtor da classe que esta extendendo.
    // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, 'Accounting') // super chama o construtor da classe que esta extendendo.
    // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('123', ['Will'])
// console.log("🚀 ~ file: app.ts ~ line 9 ~ accounting", accounting)

it.addEmployee('will');
it.addEmployee('isa');
// accounting.employees[2] = 'tupa';
it.describe();
it.name = 'New name'
it.printEmployeeInformation();

console.log(it)


const accounting = new AccountingDepartment('d2', []);

accounting.addReports('Something went wrong');
accounting.printReports();


// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();