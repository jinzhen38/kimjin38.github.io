/**
 * 피보나치 수열을 
1) Loop를 이용하여 작성하시오.
2) 순수 재귀를 이용하여 작성하시오.
3) memoization하여 작성하시오.

수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
loopFibonacci(5); // 5
recurFibonacci(7); // 13
memoFibonacci(30); // 832040
 */

//1) Loop 
function loopFibonacci(n) {
    if (n <=1 ) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++){
        let t = prev;            // 임시 변수 t
        prev = curr;
        curr = t + curr;
    }
    return curr;
}
console.log(loopFibonacci(5));

//1-1) 구조 분해 할당 사용
function loopFibonacci1(n) {
    if (n <=1 ) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++){
      [prev, curr] = [curr, prev+curr] //  prev ← curr, curr ← prev + curr 갱신
    }
    return curr;
}
console.log(loopFibonacci1(5));

// 2) 재귀 함수
function recurFibonacci(n){
    if(n<=1)return n;
    return recurFibonacci(n-2) + recurFibonacci(n-1);
};
console.log(recurFibonacci(7));

// 3) memoization 
const memoFibonacci = memoized(function (n) {
    if (n <= 1) return n;
    return memoFibonacci(n-2) + memoFibonacci(n-1);
}
);

function memoized(fn) {
    const cache = {};                   // 결과를 저장할 객체 선언 (캐시 역할)
    return function (k) {
        return cache[k] || (cache[k] = fn(k)); // 캐시에 k가 있으면 바로 반환
    };                                         // 없으면 fn(k)을 계산해 저장 후 반환
};
console.log(memoFibonacci(30));


const memo = {}; // 이미 계산된 결과를 저장하는 캐시 객체

function fib(n) {
  if (n <= 1) return n;
  if (n in memo) return memo[n]; // 이미 계산한 값이면 다시 계산하지 않고 memo[n]을 반환

  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}