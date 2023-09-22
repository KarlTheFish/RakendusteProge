const test = [12, 21, 53, 23, 2];

function findIndex(ar, nr){
    return test.indexOf(nr);
}

//console.log(findIndex(test, 2));

//arrow function

function addition(nr1, nr2){
    return nr1 + nr2;
}

console.log(addition(221, 463));

const arrowFunction = (nr1, nr2) => { return nr1 + nr2}

console.log(arrowFunction(23, 54))

//alternate syntax
const arrowFunction2 = (nr1, nr2) => nr1 + nr2;
console.log(arrowFunction2(43, 65))

//nested

function addNumbers(num1, num2){
    return function addNumHelper(num2){
        return num1 + num2
    } //You can do anything with functions in javascript, including return them
}

function addNumbersInf(num1){
    return function addNumbersInf(num2){
        return num1 + num2;
    }
}

//addNumbersIf arrow function

const InfNumbersArrow = (num1) => Inf2 = (num2) => num1 + num2;

console.log(InfNumbersArrow(5)(21))

//Arrow function printida "Hello" + nimi, kasutades string literals
//String literal näide:
//const name = "Nimi on ${muutuja}"

const Tervitus = (name) => `Tere ${name}` // " asemel kasutada `

let name = "Karl"
console.log(Tervitus(name))

//map, filter, reduce

const numberArray = [1, 2, 3, 4, 5];

    //vaja teha uus array, kus kõikidel numbritel on liidetud +5

const newArray = numberArray.map((n) => n + 5)
    // .map(() => {}) e. arrow function
    //arrow functionis kui on loogelised sulud, peab olema "return"

console.log(newArray)

    //filter

const filteredArray = numberArray.filter((n) => n < 4)
console.log(filteredArray)
    //.filter((element) => {filter condition})

const names = ["Juku","Mari","Jaan","Anni"]

const peopleData = names.map((nameElement) =>{
    return {name: nameElement,
            age: nameElement.length + 20,
            email: nameElement.toLowerCase() + "@company.com",
            address: nameElement + " street 69",
            username: nameElement.split("").reverse().join("")}
})

console.log(peopleData)

//spread syntax - võtab ja pakib eraldi lahti valitud objekti, saab uue luua

const newJuku = {
    ...peopleData[0],
    height: 175,
    age: 25 //kirjutab üle eelmised andmed, kui saab
}

console.log(newJuku)


