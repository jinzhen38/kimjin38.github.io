// 1) 다음 arr 첫번째 원소와 두번째 원소를 swap 해보세요. 
// swap : 두 변수의 값을 서로 바꾸는 것

const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

 console.log(arr); // [2,1]

//const arr = [1, 2];에서 arr는 재할당은 불가능하지만, 배열 내부 요소는 변경할 수 있음 

// 2) (구조분해할당 이용한 swap)

let a = 5;
let b = 10;
[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5

// 전통적인 방법 (임시변수 사용)

let x = "apple";
let y = "banana";

let temp = x;
x = y;
y = temp;

console.log(x); // "banana"
console.log(y); // "apple"