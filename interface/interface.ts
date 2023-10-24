// interface Stark{
//     name: string;
//     age?: number;
    
// }
// function printName(stark: Stark){
//     console.log(stark.name);
// }
  
//   printName({name:"Edward"});
//   printName({name:"Maya"});


class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    dance(){
        console.log(this.name + ' is dancing');

    }
}

var bran = new Person('Bran');
bran.dance();

class AwesomePerson extends Person {
    play(){
        console.log("So Awesome!");
        super.dance();
    }
}

var robb = new AwesomePerson('Robb');
robb.play();