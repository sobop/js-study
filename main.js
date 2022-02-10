const str = 'Hello world!'

// length : 문자 길이 출력
console.log(str.length) // 12

// indexOf : 인수를 포함하고있으면 몇번째에 있는지 출력, 없으면 -1 출력
console.log(str.indexOf('world')) // 6

// slice : 1번째 수부터 2번째 수까지 출력
console.log(str.slice(0, 3)) // Hel

// replace : 1번째 인수 -> 2번째 인수로 변경
console.log(str.replace('world', 'js')) // Hello js!

// match : 인수를 포함하고있으면 인수 출력
console.log(str.match('world')) // ['world', index: 6, input: 'Hello world!', groups: undefined]

// trim : 앞뒤 공백 제거
console.log(str.trim())