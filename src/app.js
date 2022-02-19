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
var user1;
user1 = {
    name: 'Will',
    age: 29,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
var user2;
var Person = /** @class */ (function () {
    function Person(nameIn) {
        this.age = 29;
        this.name = nameIn;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
user2 = new Person('will');
console.log('user2', user2);
var PersonTwo = /** @class */ (function () {
    function PersonTwo(nameIn) {
        this.age = 29;
        if (nameIn) {
            this.name = nameIn;
        }
    }
    PersonTwo.prototype.greet = function (phrase) {
        if (this.name)
            console.log(phrase + ' ' + this.name);
        else
            console.log('hi');
    };
    return PersonTwo;
}());
// let user3: GreetableTwo = new PersonTwo('will');
var user3 = new PersonTwo();
user3.greet('oi');
var add;
add = function (n1, n2) {
    return n1 + n2;
};
