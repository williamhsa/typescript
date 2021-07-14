class Department {

  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];  //agora essa propriedade é acessivel apenas de dentro da classe.

  // com protected qualquer classe que extenda Deparment tera acesso a modificar employees

  constructor(private readonly id: string, public name: string) { }; // outra maneira de inicializacao e criacao de propriedades.
  // o modificador readonly só deixa alterar na inicializacao, depois eu nao consigo mudar essa propriedade em nenhuma lugar do codigo.
  // constructor(idIn: string, nameIn: string) {
  //   this.id = idIn;
  //   this.name = nameIn;
  // };

  static createEmployee (name: string) {
    return { name: name }
  }

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
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');
    
    this.addReports(value);
  }


  constructor(id: string, public reports: string[]) {
    super(id, 'Accounting') // super chama o construtor da classe que esta extendendo.
    // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
    this.lastReport = reports[0]
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


const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Somethinng went wrong 2'
accounting.addReports('Something went wrong');
console.log('ae', accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
console.log('ae')
accounting.printEmployeeInformation()


// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();