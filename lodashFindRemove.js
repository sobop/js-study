import _ from 'lodash'

const users = [
    {userId: '1', name: 'YS'},
    {userId: '2', name: 'Lee'},
    {userId: '3', name: 'Kim'},
    {userId: '4', name: 'Park'},
    {userId: '5', name: 'Bae'},
]

const foundUser = _.find(users, {name: 'Kim'})
const foundUserIndex = _.findIndex(users, {name: 'YS'})
console.log(foundUser)      // 해당하는 객체 데이터 찾기
console.log(foundUserIndex) // 해당하는 객체 위치 찾기

_.remove(users, {name: 'YS'})
console.log(users)          // 해당하는 객체 데이터 지우기