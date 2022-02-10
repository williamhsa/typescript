abstract class Department { 
  // nao posso instanciar um classe abstrata
 // é uma classe apenas que existe para ser herdada
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];  //agora essa propriedade é acessivel apenas de dentro da classe.

  // com protected qualquer classe que extenda Deparment tera acesso a modificar employees

  constructor(protected readonly id: string, public name: string) { }; // outra maneira de inicializacao e criacao de propriedades.
  // o modificador readonly só deixa alterar na inicializacao, depois eu nao consigo mudar essa propriedade em nenhuma lugar do codigo.
  // constructor(idIn: string, nameIn: string) {
  //   this.id = idIn;
  //   this.name = nameIn;
  // };

  static createEmployee (name: string) {
    return { name: name }
  }

  // se eu possuo um ou mais metodos abstratos preciso colocar o nome da minha classe como abstract
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  };

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

console.log('teste');


class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT') // super chama o construtor da classe que esta extendendo.
    // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
    this.admins = admins;
  }

  describe() {
    console.log('it deparment', this.id);
    
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');
    
    this.addReports(value);
  }

  /* 
  colanco o private no metodo construtor, isso faz com que garanta
  que nao possamos chamar de novo, getInstance verificara se ja temos
  uma instancia dessa classe e, se nao retornara uma nova.
  um metodo estatico pode ser chamado na propria classe, vc nao
  precisa instancia-lo
  
  */
  private constructor(id: string, public reports: string[]) {
    super(id, 'Accounting') // super chama o construtor da classe que esta extendendo.
    // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
    this.lastReport = reports[0]
  }

  static getInstance() {
    if(AccountingDepartment.instance) return this.instance
    this.instance = new AccountingDepartment('d2', [])
    return this.instance
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }


  addEmployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('tupa')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('123', ['Will'])
// console.log("🚀 ~ file: app.ts ~ line 9 ~ accounting", accounting)

it.addEmployee('will');
it.addEmployee('isa');

// accounting.employees[2] = 'tupa';
it.describe();
it.name = 'New name'
it.printEmployeeInformation();

console.log(it)


// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance()
console.log("🚀 ~ file: app.ts ~ line 127 ~ accounting", accounting)
const accounting2 = AccountingDepartment.getInstance()
console.log("🚀 ~ file: app.ts ~ line 129 ~ accounting2", accounting2)

accounting.mostRecentReport = 'Somethinng went wrong 2'
accounting.addReports('Something went wrong');
console.log('ae', accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
console.log('ae')
// accounting.printEmployeeInformation()
accounting.describe();

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();

// quando nao posso fornecer um metodo geral, mas desejo
// ...garantir que esse metodo exista, as classes herdadas
// ...precisarao fornecer sua propria implementacao
// ...porque vc nao pode fornecer uma implementacao padrao na // ... classe base .
// Portanto, em tal situacao, convem ter um metodo vazio
// ... em sua classe base e agora forcar todas as classes
// ...baseadas nessa classe a adicionar e substituir esse
// ...metodo, e vc pode faze-lo adicionando a palavra chave
// ...abstract.

/*
Padrao singleton é sobre garantir que voce sempre tenha apenas 
exatamente uma instancia de uma determinada classe.



*/