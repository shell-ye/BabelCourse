import '@babel/polyfill'

// 箭头函数与 const
const text = 'Hello World'

const myAlert = msg => {
    console.log('箭头函数:', msg)
}

myAlert(text)

// Promise
let p = new Promise((resolve, reject) => {
    resolve('success')
}).then(res => {
    console.log('Promise:', res)
})

// Class
class ClassTest {
    cons () {
        console.log('Class: success')
    }
}

let a = new ClassTest()
a.cons()