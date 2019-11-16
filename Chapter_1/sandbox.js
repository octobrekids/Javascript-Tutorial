// can change
let age = 25 
let year = 2019

console.log(age, year) 

age = 30

// to show the output at console
console.log(age, year)

// dont want to change/overwrite value of variable
const points = 1000 
console.log(points)

// can do because changed only preview vaule not the value in varriable
console.log(points+1500) 


//----------------------------------

// string
// console.log('hello, world')

// let email = 'chnrd.k@gmail.com'
// console.log(email)

// string concatenation (joining things together)
// let firstName = 'Brandon'
// let lastName = 'Sanderson'

// let fullName = firstName + ' ' + lastName

// console.log(fullName)

// getting characters
// console.log(fullName[0])

// string length
// console.log(fullName.length)

// string methods
// console.log(fullName.toUpperCase())
// let result = fullName.toLowerCase()
// console.log(result)

// find the index in the 'email' 
// let index = email.indexOf('@')
// console.log(index)

//----------------------------------

// common string methods

let newEmail = 'mario@gmail.com'

// last index of
// let newResult = newEmail.lastIndexOf('o')
// console.log('last index of o'+' '+newResult)

// slice string from index 0 - 10 
// let newResult = newEmail.slice(0,10)

// similar to slice but 4 is index that start from and 10 is number (not index)
// let newResult = newEmail.substr(4,10)

// replace character
// let newResult = newEmail.replace('m','z')

// console.log(newResult)

//----------------------------------

// let radius = 10
// const pi = 3.14

// math operator +, -, *, /, **(square), %
// let result = pi * radius**2

// order of operation - B(Bracket) I(Indice) D(Division) M(Multipulation) A(Addition) S(Subtraction)
// let result = 5 * (10-3)**2 

// let likes = 10
// likes++
// likes+=10

// Nan = not a number
// console.log(5/'hello')

// let likes = 10
// let result = 'the blog has ' + likes + ' likes'
// console.log(result)

//----------------------------------
// template strings
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = 30

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
// console.log(result)

// template string way (`` - backticks)
// let result = `the blog called ${title} by ${author} has ${likes} likes`
// console.log(result)


// creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `

// console.log(html)

//----------------------------------
// array
let ninjas = ['shuan','ryu','chun-li']
// console.log(ninjas)

// ninjas[0] = 'ken'
// console.log(ninjas[0])

// let ages = [20,25,30,35]
// console.log(ages[2])

// let random = ['shuan','ryu',30,25]
// console.log(random)

// console.log(ninjas.length)

// join the element in array with comma
// let result = ninjas.join(',')
// let result = ninjas.indexOf('ryu')

// add new element in array
// let result = ninjas.concat(['ken','jungkook'])

// return the number of element after push the element
let result = ninjas.push('ken')
// return the value that is poped
result = ninjas.pop()

console.log(result)















