let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// \ : 이스케이프 문자 -> 본래의 기능에서 벗어난다.
// $ : 문자데이터의 끝부분에 인수를 확인 (없으면 null)
// m : 여러줄마다 확인

console.log(str.match(/\.$/gim))
// ['.']
console.log(str.match(/d$/g))
// null (백틱까지 포함해서 null출력된다)
console.log(str.match(/d$/gm))
// ['d']
console.log(str.match(/^t/gim))
// ['t', 'T']
console.log(str.match(/h..p/g))
// ['http', 'http']
console.log(str.match(/fox|dog/g))
// ['fox ', ' dog']
console.log(str.match(/fox|dog/))
// ['fox']
console.log(str.match(/https?/g))
// ['https', 'http']
console.log(str.match(/d{2}/g))
// ['dd', 'dd']
console.log(str.match(/d{2,}/g))
// ['dddd']
console.log(str.match(/d{2,3}/g))
// ['ddd']
console.log(str.match(/[fox]/g))
// ['o', 'o', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'x', 'o', 'o', 'o', 'o']
console.log(str.match(/[0-9]{1,}/g))
// ['010', '1234', '5678', '7035', '60', '1234']
console.log(str.match(/[가-힣]{1,}/g))
// ['동해물과', '백두산이', '마르고', '닳도록']
console.log(str.match(/\bf\w{1,}\b/g))
// ['frozen', 'fox']
console.log(str.match(/.{1,}(?=@)/g))
// ['thesecon']
console.log(str.match(/(?<=@).{1,}/g))
// ['gmail.com']