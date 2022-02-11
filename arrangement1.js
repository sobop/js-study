const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => {
    return number < 3
})
console.log(a)  // [true, true, false, false]

// filter : 기준에 맞는 데이터를 출력
const b = numbers.filter(number => {
    return number < 3
})
console.log(b)  // [1, 2]

// find : 찾아서 출력
const c = fruits.find(fruit => {
    return /^B/.test(fruit) // /^B/ : 대문자 B로 시작하는 단어
})
console.log(c)

// findIndex : 번호(배열 위치) 출력
const d = fruits.findIndex(fruit => {
    return /^B/.test(fruit) // /^B/ : 대문자 B로 시작하는 단어
})
console.log(d)

// includes : 인수가 포함되어있으면 true 출력
const e = numbers.includes(3)
console.log(e)

const f = fruits.includes('Banana')
console.log(f)