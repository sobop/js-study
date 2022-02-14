import _ from 'lodash'

const usersA = [
    {userId: '1', name: 'YS'},
    {userId: '2', name: 'Lee'}
]
const usersB = [
    {userId: '1', name: 'YS'},
    {userId: '3', name: 'sobop'}
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// uniqBy : 배열 데이터가 1개일 때 중복제거
// 두번째 인수 : 필요한 값 출력

const usersD = _.unionBy(usersA, usersB, 'userId')  
console.log('unionBy', usersD)
// unionBy : 배열 데이터가 여러개일 때 중복제거
// 마지막 인수 : 필요한 값 출력