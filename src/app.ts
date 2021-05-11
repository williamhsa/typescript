class Department {
  name: string;

  constructor(nameIn: string) {
    this.name = nameIn;
  };

  describe(this: Department) {
    console.log('Department: ', this.name);
  }
}

const accounting = new Department('Accounting')
console.log("🚀 ~ file: app.ts ~ line 9 ~ accounting", accounting)
accounting.describe();

const accountingCopy = { name: 's', describe: accounting.describe }

accountingCopy.describe();