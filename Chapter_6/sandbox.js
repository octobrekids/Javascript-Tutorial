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

// const content = document.querySelector('.content')
// console.log(content.innerHTML)
// content.innerHTML = '<h2>this is a new h2</h2>'

// const people = ['mario','luigi','yoshi']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// ------------------------
// get link from a href(attribute ' only href ')

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href','www.youtube.com')
// link.innerHTML = 'youtube ja'


// const mssg = document.querySelector('p')
// console.log(mssg.getAttribute('class'))
// mssg.setAttribute('class','success')

//if doesnt exist first javascript gonna create it
// mssg.setAttribute('style','color:green;')

// ------------------------

// const title = document.querySelector('h2')
// overwrite (orange is gone)
// title.setAttribute('style','margin: 50px;')

// console.log(title.style)
// console.log(title.style.color)

// title.style.margin = '100px'
// title.style.color = 'pink'
// title.style.fontSize = '60px'
// title.style.margin = ''

// ---------- CLASS LIST --------------

const content = document.querySelector('p')

console.log(content.classList)
content.classList.add('error')
content.classList.remove('error')

content.classList.add('success')















