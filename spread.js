const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)     // ['Apple', 'Banana', 'Cherry']
console.log(...fruits)  // Apple Banana Cherry

// 마지막인수는 나머지 과일을 마지막 배열에 들어오게함
const toObject = (a, b, ...c) => ({a, b, c})
console.log(toObject(...fruits))    // {a: 'Apple', b: 'Banana', c: 'Cherry'}
fruits.push('Orange')
console.log(toObject(...fruits))    // a: "Apple"
                                    // b: "Banana"
                                    // c: (2) ['Cherry', 'Orange']