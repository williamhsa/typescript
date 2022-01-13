var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // com protected qualquer classe que extenda Deparment tera acesso a modificar employees
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = []; //agora essa propriedade é acessivel apenas de dentro da classe.
    }
    ; // outra maneira de inicializacao e criacao de propriedades.
    // o modificador readonly só deixa alterar na inicializacao, depois eu nao consigo mudar essa propriedade em nenhuma lugar do codigo.
    // constructor(idIn: string, nameIn: string) {
    //   this.id = idIn;
    //   this.name = nameIn;
    // };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    ;
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
console.log('teste');
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') // super chama o construtor da classe que esta extendendo.
         || this;
        // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('it deparment', this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') // super chama o construtor da classe que esta extendendo.
         || this;
        _this.reports = reports;
        // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error('No report found');
        },
        set: function (value) {
            if (!value)
                throw new Error('Please pass in a valid value!');
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('tupa');
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment('123', ['Will']);
// console.log("🚀 ~ file: app.ts ~ line 9 ~ accounting", accounting)
it.addEmployee('will');
it.addEmployee('isa');
// accounting.employees[2] = 'tupa';
it.describe();
it.name = 'New name';
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Somethinng went wrong 2';
accounting.addReports('Something went wrong');
console.log('ae', accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
console.log('ae');
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
