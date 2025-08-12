/*slice & splice 
* slice : 일부 추출하기,가져오기 
  slice(start 인덱스 포함, end 인덱스 미포함) 추출
* splice : 제거, 추가하기 
  splice(start, deleteCount) 제거 후 추출
*/

const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
const ex1 = arr2.slice(1,3);
console.log(ex1);       // [2,3]

// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);  // 끝까지면 마지막 인덱스 생략
console.log(ex2);   // [ 3, 4, 5 ]
console.log(arr2);  // [ 1, 2, 3, 4, 5 ]

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
console.log(ex3); // [ 2, 3, 4 ]
console.log(arr2); // [ 1, 5 ]

// ex4) 위에 원래대로 복원하기
const ex4 = arr2.splice(1,0,2,3,4);
console.log(ex4); //[]
console.log(arr2); // [ 1, 2, 3, 4, 5 ] 

// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2);
console.log(ex5); // [ 3, 4, 5 ]
console.log(arr2); // [ 1, 2 ]

// ex6) 복원하기
const ex6 = arr2.splice(3,0,3,4,5);
console.log(ex6); //[]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
const arr3 = [1, 2, 3, 4, 5];
const ex7 = arr3.splice(2,3,'X','Y','Z','4','5');
console.log(ex7); // [ 3, 4, 5 ]
console.log(arr3); // [1,  2,  'X', 'Y','Z', '4', '5']

// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const arr4 = [1, 2, 3, 4, 5];
const ex7x = arr4.splice(2,1,'X','Y','Z');
console.log(ex7x);// [3]
console.log(arr4); // [ 1, 2, 'X', 'Y', 'Z', 4, 5]

// ex8) 위 7번 문제를 splice를 사용하지 말고 slice를 이용하여 작성하시오.
//  **slice() + concat()**을 조합해서 새 배열
// concat : 두 배열 합쳐서 새 배열 
const ex8 = arr2.slice(0, 2)    // [1,2]
            .concat(['X', 'Y', 'Z'], arr2.slice(3));  // ['X','Y','Z'] + [4,5]
console.log(ex8); // [ 1, 2, 'X', 'Y', 'Z', 4, 5]

/*
// ex4) 복원하기
const ex4 = arr2.splice();
assert.deepStrictEqual(ex4, []);
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice();
assert.deepStrictEqual(ex5, [3, 4, 5]);
assert.deepStrictEqual(arr2, [1, 2]);

// ex6) 복원하기
const ex6 = arr2.splice();
assert.deepStrictEqual(ex6, []);
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
const ex7 = arr2.splice();
assert.deepStrictEqual(arr2, [1, 2, 'X', 'Y', 'Z', 4, 5]);
// ==>  복원
arr2.splice();
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const ex7_2 = arr2.splice();
assert.deepStrictEqual(arr2, [1, 2, 'X', 'Y', 'Z', 4, 5]);
arr2.splice();
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const ex8 = [...arr2.slice(), 'X', 'Y', 'Z', ...arr2.slice()];
assert.deepStrictEqual(ex8, [1, 2, 'X', 'Y', 'Z', 4, 5]);
*/