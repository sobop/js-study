const user = {
    name : 'YS',
    age : 25,
    email : [
        'lyn981026@gmail.com',
        'lyn981026@naver.com'
    ]
}

// 애플리케이션 -> 로컬스토리지에 저장 (문자 데이터로 저장)
localStorage.setItem('user', JSON.stringify(user))
// 가져오기 (문자데이터를 객체로 변환)
console.log(JSON.parse(localStorage.getItem('user')))
// 수정
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 20
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))   // 문자 데이터로 변환
// 로컬 스토리지 삭제
localStorage.removeItem('user')
