let a = {k: 1}
let b = {k: 1}
console.log(a, b, a === b)    // false
a.k = 7
b = a
console.log(a, b, a === b)    // true
a.k = 2
console.log(a, b, a === b)    // true
let c = b
console.log(a, b, c, a === c)    // true
a.k = 9
console.log(a, b, c, a === c)    // true
