// 백틱 기호를 쓰면 다음줄로 넘어가도 상관없다.
let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// g 플래그 : 해당하는 값 (존재하지않으면 false)
const regexp = new RegExp('the', 'g')
// ['the', 'the']
// gi 플래그 : 해당하는 값(대소문자 포함)
const regexp = new RegExp('the', 'gi')
// ['the', 'The', 'the']
const regexp = /the/gi  // 리터럴 방식
// console.log(str.match(regexp))

const regexp = /fox/gi  // 리터럴
// console.log(regexp.test(str))
str = str.replace(regexp, 'AAA') // 대체
/*
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown AAA jumps over the lazy dog.
abbcccdddd 
*/
console.log(str)