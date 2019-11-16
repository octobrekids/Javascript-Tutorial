// for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop: ' , i)
// }

// console.log('loop finished')

// const name = ["jk", "rm", "jm"];
// for (let i = 0; i < name.length; i++) {
// console.log(name[i]);
//     let html = `<div>${name[i]}</div>`
//     console.log(html)
// }


//------------------------------------------
// functions declaration ; hoisting work! can define at the bottom of the code

// function greet(){
//     console.log('hello there')
// }

// greet()

// function expressions store in the variable; dont have hoisting ; have to define function at the top first
// const speak = function(name, time){ // name is function parameter
//     console.log(`good ${time}! ${name}`)
// }

// speak('mario', 'morning')

//------------------------------------------
// regular function
// const calcArea = function(radius){
//     let area = 3.14 * radius**2 
//     return area
// }

// arrow function (short way to write function)
// const calcArea = (radius) => {
//     return 3.14 * radius**2 
// }

// work when have 1 parameterr (radius) if more than one then use parenthesis
// const calcArea = radius => 3.14 * radius**2  

// const a = calcArea(5)
// console.log(a)

//------------------------------------------
// practise arrow functions 
// const greet = function(){
//     return 'hello, world';
// }

// const greet = () => 'hello, world'
// const result  = greet()
// console.log(result)

// const bill = function(products, tax){
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }

// const bill = (products,tax) => {
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }

// console.log(bill([10,15,30],0.2))

//------------------------------------------
// const name = 'shaun'

// functions
// const greet = () => 'hello'

// let resultOne = greet()
// console.log(resultOne)

// methods (use after dot notation)

// let resultTwo = name.toUpperCase();
// console.log(resultTwo)

//------------------------------------------
// callbacks & foreach

// let people = ['jungkook', 'rapmon', 'jimin' ,'suga', 'jin']

// people.forEach((person,index) =>{
//     console.log(index, person)
// })

// const logPerson = (person,index) => {
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach(logPerson)

//------------------------------------------
// get a reference to the 'ul'
const ul = document.querySelector('.people')

const people = ['jungkook', 'rapmon', 'jimin' ,'suga', 'jin']

let html = ``

people.forEach(person => {
    // create html template 
    html += `<li style="color:purple">${person}</li>`

})

console.log(html)
ul.innerHTML = html


