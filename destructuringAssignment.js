const user = {
    name : 'YS',
    age : 25,
    email : 'lyn981026@gmail.com',
    address : 'USA'
}
// 속성에 해당하는 값이 없다면 기본값을 설정할 수 있다.
// 값이 있다면 기본값이 아닌 값을 출력
// name이 아닌 다른 변수로 설정 가능
const {name: ys, age, email, address = 'Korea'} = user

console.log(`사용자의 이름은 ${ys}입니다.`)
console.log(`${ys}의 나이는 ${age}입니다.`)
console.log(`${ys}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d) // d는 undefined