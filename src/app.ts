/* 
Interfaces - em sua versao mais simples, descreve a estrutura 
de um objeto.

Qual a ideia por de tras de ter um interface como essa (Person),
podemos utiliza-la como uma validacao de objeto,
nos permite definir a estrutura de um objeto

logo, porque precisamos disso?
pois se utilizarmos dessa forma simplista, podemos trocar o interface
por um type, que funcionará da mesma forma.

a Grande diferenca entre type e interface, é que Interfaces
só podem ser usadas para descrever a estrutura de um objeto.
interface é mais claro quando vc define algo como interface

vc pode implementar um interface em uma classe

toda classe que implementar um interface, precisamos garantir que
essa classe tera as propriedades dessa interface implementadas, ou
seja, seguindo o contrato estabelecido pela interface

Heranca vc so pode herdar de uma classe, ja no caso de interface
eu posso implementar quantas interfaces eu quiser, simplesmente
separando por virgula

interfaces nao possuem detalhes de implementacoes, enquanto as
classes abstratas podem ser uma mistura de que vc precisa sobrescreveer metodos
e tenho algumas partes de implementacoes concretas de metodos

porque interfaces?
é util em situacoes como essa em que sabemos que queremos ter um
conjunto de funcionalidades. Assim forcando com que um classe
tenha um metodo que vc tenha definido. Assim podemos compartilhar 
facilmente a funcionalidade entre as classes e cada classe deve adicionar
sua propria implementacao.

*/

interface PersonExample {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: PersonExample;

user1 = {
  name: 'Will',
  age: 29,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

user1.greet('Hi there - I am');

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

let user2: Greetable;

class Person implements Greetable {
  name: string;
  age = 29;

  constructor(nameIn: string) {
    this.name = nameIn;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

user2 = new Person('will');
console.log('user2', user2)

// readonly

/* 
nao posso colocar modificador public or private em uma variavel de
interface

o modificador READONLY

essa propriedade com esse modificador, em qualquer objeto que voce 
construiu com base nessa interface deve ser configurada apenas uma
vez e é lida apenas posteriormente para que nao possa ser alterada

Posso

*/
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface GreetableTwo extends Named {
  greet(phrase: string): void;
}

class PersonTwo implements GreetableTwo {
  name?: string;
  age = 29;

  constructor(nameIn?: string) {
    if(nameIn) {
      this.name = nameIn;
    }
  }

  greet(phrase: string) {
    if(this.name) console.log(phrase + ' ' + this.name);
    else console.log('hi');
  }
}

// let user3: GreetableTwo = new PersonTwo('will');
let user3: GreetableTwo = new PersonTwo();
user3.greet('oi');

// user3.name = 'will i am';    //this is wrong, but

/* 
posso implementar herenca em interfaces

*/


// type AddFn = (a: number, b: number) => number;
// interfaces as functions typescript
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

