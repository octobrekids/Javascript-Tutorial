// Document Object Model
// gets only the first one it found
// const para = document.querySelector('p')

// . (class)
// const para = document.querySelector('.error')

// const para = document.querySelector('div.error')

// get unique selector from the element
// const para = document.querySelector('body > h1')
// console.log(para)

// NODE LIST

// const paras = document.querySelectorAll('p')
// const error = document.querySelectorAll('.error')

// console.log(paras) // node list not array but can use dot notation to access
// console.log(error)

// console.log(paras[2])

// can use foreach too ! 
// paras.forEach(para => {
//     console.log(para)
// })

// ------------------------
// get element by ID
// const title = document.getElementById('page-title')
// console.log(title)

// get elements by their class name (cant use foreach method in HTML collection!)
// const errors = document.getElementsByClassName('error')
// console.log(errors)
// console.log(errors[0])

// get elements by their tag name
// const paras = document.getElementsByTagName('p')
// console.log(paras)
// console.log(paras[1])

// ------------------------
// const para = document.querySelector('p')

// innerText is not a method is just a property name so dont use parenthesis
// console.log(para.innerText)
// para.innerText = 'ninjas are awesome!'

// const paras = document.querySelectorAll('p')
// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' new Text'
// })

const content = document.querySelector('.content')
// console.log(content.innerHTML)
// content.innerHTML = '<h2>this is a new h2</h2>'

const people = ['mario','luigi','yoshi']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})








