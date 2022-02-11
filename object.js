const userAge = {
    name : 'YS',
    age : 25
}
const userEmail = {
    name : 'YS',
    email : 'lyn981026@gmail.com'
}
// assign : 첫번째 인수에 두번째 인수를 병합 (같은 키가 있다면 덮어쓰기)
const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge) // true
const a = {k : 123}
const b = {k : 123}
console.log(a === b)    // false

// keys : key값만 출력
const keys = Object.keys(target)
console.log(keys)   // ['name', 'age', 'email']

console.log(target['email'])    // value값 출력 : lyn981026@gmail.com

const values = keys.map(key => target[key])
console.log(values)     // value값으로 배열 만듬 : ['YS', 25, 'lyn981026@gmail.com']