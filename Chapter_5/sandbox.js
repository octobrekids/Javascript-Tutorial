// object literals
let user = {
    name: 'jungkook',
    age: 30,
    email: 'jungkook@gmail.com',
    location: 'korea',
    blogs: ['house of cards', 'magic shop']
}

// dot notation
console.log(user)
console.log(user.name)

// user.age = 35
console.log(user.age)

// square bracket notation
console.log(user['email'])

user['name'] = 'jimin'
console.log(user['name'])

const key = 'location'
console.log(user[key]) // same as user['location']

console.log(typeof user)



