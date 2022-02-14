import _ from 'lodash'
import checkType from './getType'
// import random from './getRandom'    // default
import { random, user } from './getRandom'    // default가 아니면 데이터를 중괄호로 묶는다.
import * as R from './getRandom'    // 한번에 가져오기 ( *: 와일드카드)

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
console.log(random(), random())
console.log(user)
console.log(R)