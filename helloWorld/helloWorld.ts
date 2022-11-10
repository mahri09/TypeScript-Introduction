// console.log("Hello World");

//  tsc helloworld.ts
//command will auto create my js file same as ts file
//and everytime I call this command it will update my js file!

function hello(string: String) {
  //here we say parametr have to be a string
  console.log("Hello " + string);
}

hello("John");
//if we try to pass number not string then it will give an error
