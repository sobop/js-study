// 백틱 기호를 쓰면 다음줄로 넘어가도 상관없다.
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// g 플래그 : 해당하는 값
// const regexp = new RegExp('the', 'g')
// gi 플래그 : 해당하는 값(대소문자 포함)
// const regexp = new RegExp('the', 'gi')

const regexp = /the/gi  // 리터럴 방식
console.log(str.match(regexp))