import myData from './myData.json'

console.log(myData)

const user = {
    name : 'YS',
    age : 25,
    email : [
        'lyn981026@gmail.com',
        'lyn981026@naver.com'
    ],
    'company-name': {}  // 속성이름에 특수기호가 들어가면 따음표 붙이기
}
console.log('user', user)

const str = JSON.stringify(user)    // json 파일에 문자열로 넣는다
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)     // json 파일을 다시 객체로 바꾼다
console.log(obj)