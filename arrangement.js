const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// concat : 배열 병합
console.log(numbers.concat(fruits)) // 배열길이 7

// forEach : 반복
fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
})

const a = fruits.forEach(function (fruit, index) {
    console.log(`${fruit}-${index}`)
})
console.log(a)

// map : 새로운 배열 생성
const b = fruits.map((fruit, index) => {
    return `${fruit}-${index}`
})
const c = fruits.map(function (fruit, index) {
    return {
        id : index,
        name : fruit
    }
})
// 화살표 함수로 단축 (c = d)
const d = fruits.map((fruit, index) => ({
    id : index,
    name : fruit
}))
console.log(b)
console.log(c)
console.log(d)