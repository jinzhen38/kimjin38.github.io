/**
 * 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
 * (단, array 메소드를 사용하지 말고, destructuring을 사용하시오)
 * 
 * makeArray(10); // ⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * makeReverseArray(5); // ⇒ [5, 4, 3, 2, 1]
 */

// 1) array 사용 
function makeArray1(n) {
  return Array.from({ length: n }, (_, i) => i + 1); 
     // Array.from (길이가 n인 빈 배열 형태의 객체, 각 요소에 대해 i + 1을 리턴하여 [1, 2, ..., n] 형태로 )
     // _는 값(빈 값)은 무시하고 인덱스만 사용한다는 의미.
};

console.log(makeArray1(10));

// 2) destructuring 사용
function makeArray(n) {
    if(n === 1) return[1];
    // return [makeArray(n-1),n];  // [...[[Array],8],9],10]
    return [...makeArray(n-1),n];   // 배열 풀어주기 spread operator
};

console.log(makeArray(10));

function makeReverseArray(n) {
    if(n === 1) return[1];
    return [n, ...makeReverseArray(n-1)]
};

console.log(makeReverseArray(5));

// cf. 위 makeArray를 TCO로 작성하시오.
// makeArrayTCO(10); // ⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// TCO : 꼬리호출최적화 , 재귀함수

function makeArrayTCO(n, acc = []){
    if(n === 1) return [1,...acc];
    return makeArrayTCO(n-1,[n,...acc])
};

console.log(makeArrayTCO(10));