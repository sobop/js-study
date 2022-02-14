import _ from 'lodash'  // lodash 설치
const user = {
    name : 'YS',
    age : 25,
    emails : ['lyn981026@gmail.com']
}
// 깊은복사
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)  // false

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

user.emails.push('lyn981026@naver.com')
console.log(user.emails === copyUser.emails)    // false
console.log('user', user)
console.log('copyUser', copyUser)
