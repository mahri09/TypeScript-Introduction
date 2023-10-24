var n: Number = 1;
//here we determining type of variable and we cannot assign another data type here otherwise it will giv ean error!
n = 5;

var isWinter: boolean = false;
var count: Number = 5;
var fname: String = "Mahri";

var names: any[] = ["John", "Arya", "Rickon", 5];
//to store any type data in array we use any

enum Starks {
  John,
  Bran,
  Edward,
  Catrine,
}

var cat: Starks = Starks.Catrine;

// function getName(): string {
//   return 'abc';
// }

//void means returns nothing
function getName(): void {
  console.log("Winter is coming!");
}

