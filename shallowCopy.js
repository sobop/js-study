const user = {
    name : 'YS',
    age : 25,
    emails : ['lyn981026@gmail.com']
}
// 얕은 복사
const copyUser = Object.assign({}, user)
// const copyUser = {...user}
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

user.emails.push('lyn981026@naver.com')
console.log(user.emails === copyUser.emails)    // true
console.log('user', user)
console.log('copyUser', copyUser)
