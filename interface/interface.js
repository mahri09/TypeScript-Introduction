// interface Stark{
//     name: string;
//     age?: number;
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
// }
// function printName(stark: Stark){
//     console.log(stark.name);
// }
//   printName({name:"Edward"});
//   printName({name:"Maya"});
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + ' is dancing');
    };
    return Person;
}());
var bran = new Person('Bran');
bran.dance();
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.play = function () {
        console.log("So Awesome!");
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var robb = new AwesomePerson('Robb');
robb.play();
