// object literals
let user = {
    name: 'jungkook',
    age: 30,
    email: 'jungkook@gmail.com',
    location: 'korea',
    blogs: [ 
        {title: 'house of cards', likes: 30},
        {title: 'magic shop', likes: 30}
    ],
    login: function(){
        console.log('the user logged in')
    },
    logout: function(){
        console.log('the user logged out')
    },
    // to use this cannot use with arrow function - but can use 'logBlogs()' instead
    logBlogs(){
        // console.log(this.blogs)
        console.log('this user has written the following blogs: ')
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
}

// dot notation
// console.log(user)
// console.log(user.name)

// user.age = 35
// console.log(user.age)

// square bracket notation
// console.log(user['email'])

// user['name'] = 'jimin'
// console.log(user['name'])

// const key = 'location'
// console.log(user[key]) // same as user['location']

// console.log(typeof user)

user.login()
user.logout()
user.logBlogs()

// regular method isn't define in object
// const name = 'mario'
// name.toUpperCase()


//-------------------------------
// math object
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.9

// ปัดขึ้น-ลง ดู .5 
console.log(Math.round(area))
// ปัดลงหมด
console.log(Math.floor(area))
// ปัดขึ้นหมด
console.log(Math.ceil(area))
// ปัดลงหมดปะ แง
console.log(Math.trunc(area))

// random number
const random = Math.random()
console.log(random)
console.log(Math.round(random)) // 0-1
console.log(Math.round(random*100)) // 1-100

//-------------------------------
// primitive & reference object
// primitive will not change after change other one
// but reference (likes pointer) will change after the other one changes








