/* 
다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
(단, 입력값은 다음 예시로 한정함)
// push, pop, shift, unshift  : 비순수함수임 
*/

const assert = require('assert');
const arr = [1, 2, 3, 4];

// push 
// 배열 끝에 요소 추가하기
// const push = (array, ...args) => {}
const push = (array, ...args) => [...array, ...args];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]); 
console.log(push(arr, 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]

//pop
// 배열 마지막 요소 제거하기
/** pop(array) → 마지막 요소 (값)
pop(array, n) → 마지막 n개 요소 (배열) */

// const pop = (array, cnt = 1) => …

const pop = (array, cnt = 1) => cnt === 1 ? 
  array.at(-1) : array.slice(-cnt);   // at(-1)은 값 반환, slice(-n)은 배열 반환
  // array[array.length -1]

assert.deepStrictEqual(pop(arr), 4); 
assert.deepStrictEqual(pop(arr, 2), [3, 4]);    // 2개 팝!
console.log(pop(arr)); //4
console.log(pop(arr, 2));//[ 3, 4 ]

// unshift 
// 배열 시작 부분에 요소 추가하기
const unshift = (array, ...args) => [...args, ...array];
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
console.log(unshift(arr, 0)); // [ 0, 1, 2, 3, 4 ]
console.log(unshift(arr,7, 8)); // [ 7, 8, 1, 2, 3, 4 ]

// shift 
// 배열 첫 번째 요소 제거하기 
// 매개변수 cnt: 앞에서 자를 개수 (기본값 1)
const shift = (array, cnt = 1) => 
    [array.slice(0,cnt), array.slice(cnt)];
 // array를 앞에서부터 cnt개 잘라낸 부분과, 그 나머지 부분을 배열로 리턴
 // array.slice(begin, end)
 
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [[1, 2], [3, 4]]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]); 
console.log(shift(arr)); // [ [ 1 ], [ 2, 3, 4 ] ]
console.log(shift(arr,2)); // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(arr); // [ 1, 2, 3, 4 ]

