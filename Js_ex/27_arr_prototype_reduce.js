/** 
 * Array.prototype.reduce 함수를 직접 구현하시오. 
 * : 동일하게 작동하는 기능을 직접 구현하라는 뜻
 * const reduce = (arr, fn, initValue) => {// 이 부분을 작성하시오 }
 */

// reduce(): 배열의 모든 요소를 누적(accumulate) 하여 하나의 값으로 줄이는 배열 메서드
/* array.reduce((accumulator, currentValue, index, array) 
  => {...}, initialValue); */

const reduce = (arr, fn, initValue) => {  
    let i = 0;
    let acc = initValue ?? arr[i++]; 
    // initValue가 null 또는 undefined가 아니면 그 값을 사용
	  // 그렇지 않으면 arr[0]을 초기값으로 사용하고, i를 1로 증가시켜 다음 요소부터 시작
    for (; i < arr.length; i++) {     // i부터 배열 끝까지 반복
    acc = fn(acc, arr[i], i, arr);    // 누적 콜백 fn을 호출
    }
    return acc     //최종 누적 값 반환
};



const assert = require('assert');

const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park];

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);
