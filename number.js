const pi = 3.14159265358979
console.log(pi)

// toFixed : 인수만큼 소수점까지 문자 타입으로 출력
const str = pi.toFixed(2)
console.log(typeof str)
console.log(str)

const int = parseInt(str)   // int로 바꿈
const float = parseFloat(str)   // float로 바꿈
console.log(int)
console.log(float)

console.log('abs: ', Math.abs(-12)) // 절대값
console.log('min: ', Math.min(2, 8)) // 최소값
console.log('max: ', Math.max(2, 8)) // 최대값
console.log('ceil: ', Math.ceil(3.14)) // 올림
console.log('floor: ', Math.floor(3.14)) // 내림
console.log('round: ', Math.round(3.14)) // 반올림
console.log('random: ', Math.random()) // 랜덤
function random() {
    return Math.floor(Math.random() * 10)
}
console.log(random());