//Explicit
var firstName = "Dylan";
//firstName = 33; --- error (Number cannot be assigned to string)
firstName = "XYZ";
var names = [];
names.push("Chris");
console.log(names);
var readonlyArray = ['some text'];
//readonlyArray.push("additional data");
console.log(readonlyArray);
//Tuples
var ourTuple;
ourTuple = [33, true, "Something"];
console.log(ourTuple);
console.log(ourTuple[2]);
//Readonly Tuples
var graph = [55.5, 66.6];
console.log(graph);
console.log(graph[0]);
//Object Types
//? next to gender means it is optional
var user = {
    firstName: "Chris",
    //gender : "Genderfluid",
    age: 26
};
console.log(user);
user.firstName = "David";
//user.firstName = 33; --- Error: Type 'number' is not assignable to type 'string'
//Enums --Default first value = 0, then add one for each element after
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 404] = "North";
    CardinalDirections[CardinalDirections["East"] = 200] = "East";
    CardinalDirections[CardinalDirections["South"] = 666] = "South";
    CardinalDirections[CardinalDirections["West"] = 400] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
currentDirection = CardinalDirections.South;
console.log(currentDirection);
var EnglishToSpanish;
(function (EnglishToSpanish) {
    EnglishToSpanish["Library"] = "biblioteca";
    EnglishToSpanish["Hello"] = "Hola";
    EnglishToSpanish["Goodbye"] = "Adios";
    EnglishToSpanish[EnglishToSpanish["Ocho"] = 8] = "Ocho";
})(EnglishToSpanish || (EnglishToSpanish = {}));
var spanishWord = EnglishToSpanish.Library;
console.log(spanishWord);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
car.model = "F150";
car.type = "Ford";
car.year = 2012;
console.log(car);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
//Union (OR)
//| for parameters means that variable code can either be string OR number
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
//Functions
function getTime() {
    return new Date().getTime();
}
