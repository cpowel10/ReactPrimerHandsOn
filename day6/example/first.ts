//Explicit
let firstName : string = "Dylan";
//firstName = 33; --- error (Number cannot be assigned to string)
firstName = "XYZ";

const names : string [] = [];
names.push("Chris");

console.log(names);

let readonlyArray : readonly string[] = ['some text'];
//readonlyArray.push("additional data");
console.log(readonlyArray);

//Tuples
let ourTuple : [number,boolean,string];
ourTuple = [33,true,"Something"];
console.log(ourTuple);
console.log(ourTuple[2]);

//Readonly Tuples
const graph : readonly [x:number,y:number] = [55.5,66.6];
console.log(graph);
console.log(graph[0]);

//Object Types
//? next to gender means it is optional
const user : {firstName: string, gender?: string, age: number}={
    firstName : "Chris",
    //gender : "Genderfluid",
    age : 26
};
console.log(user);

user.firstName = "David";
//user.firstName = 33; --- Error: Type 'number' is not assignable to type 'string'

//Enums --Default first value = 0, then add one for each element after
enum CardinalDirections {
    North = 404,
    East = 200,
    South = 666,
    West = 400
  }
let currentDirection = CardinalDirections.North;
console.log(currentDirection);
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
currentDirection = CardinalDirections.South;
console.log(currentDirection);

enum EnglishToSpanish {
    Library = "biblioteca",
    Hello = "Hola",
    Goodbye = "Adios",
    Ocho = 8
}
let spanishWord = EnglishToSpanish.Library;
console.log(spanishWord);

//Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

car.model = "F150";
car.type = "Ford"
car.year = 2012
console.log(car);

//Interfaces
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

  //Union (OR)
  //| for parameters means that variable code can either be string OR number
  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

//Functions
function getTime(): number {
    return new Date().getTime();
}