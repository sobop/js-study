const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// push : 배열 맨뒤에 인수 삽입
const a = numbers.push(5)
console.log(numbers)
// unshift : 배열 맨앞에 인수 삽입
numbers.unshift(0)
console.log(numbers)
// reverse : 배열 뒤집기
numbers.reverse()
console.log(numbers)
// splice : 첫번째 인수값에서 두번째 인수값만큼 빼기
numbers.splice(2, 1)
console.log(numbers)    // [5,4,2,1,0]
// 두번째 인수에서 세번째 인수를 추가
numbers.splice(2, 0, 999)
console.log(numbers)    // [5,4,999,2,1,0]