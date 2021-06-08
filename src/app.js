var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
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
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name + '\nid:' + this.id);
    };
    ;
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    ;
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') // super chama o construtor da classe que esta extendendo.
         || this;
        // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') // super chama o construtor da classe que esta extendendo.
         || this;
        _this.reports = reports;
        return _this;
        // preciso chamar o super antes de fazer qualquer coisa com a palavra chave THIS
    }
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
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
accounting.addReports('Something went wrong');
accounting.printReports();
// const accountingCopy = { name: 's', describe: accounting.describe }
// accountingCopy.describe();
