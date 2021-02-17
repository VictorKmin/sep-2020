const var22 = 22;

function createUser(name, age) {
    logger(`Hello. My name is ${name} and I am ${age} yesrs old`)
}

console.log(222);
console.log('___________________________________________________')
console.log(__dirname)
console.log(__filename)
console.log('___________________________________________________')

function logger(string) {
    console.log(string)
}

module.exports = {
    var22,
    createUser,
    ff: (()=> {
        console.log(22);
    })()
}
