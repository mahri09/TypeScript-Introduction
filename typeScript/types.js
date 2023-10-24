// compiling *- tsc types.ts
var n = 1; 
//here we determining type of variable and we cannot assign another data type here otherwise it will giv ean error!
n = 5;
var isWinter = false;
var count = 5;
var fname = "Mahri";
var names = ["John", "Arya", "Rickon", 5];
//to store any type data in array we use any
var Starks;
(function (Starks) {
    Starks[Starks["John"] = 0] = "John";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Edward"] = 2] = "Edward";
    Starks[Starks["Catrine"] = 3] = "Catrine";
})(Starks || (Starks = {}));
var cat = Starks.Catrine;
// function getName(): string {
//   return 'abc';
// }
//void means returns nothing
function getName() {
    console.log("Winter is coming!");
}


