/** some/ every / filter */

// const assert = require('assert'); 

// 소수 
function isPrimeNormal(n) {
  if (n <= 2) { return false };
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeNormal(4));

// 1)특정 배열의 원소 중 소수(prime number)가 존재하는지 체크하는 함수를 작성하시오.
// const hasPrime = (arr) => <이 부분을 작성하세요>;

const makeArray = (length, startNum = 1) => {
    return Array.from({length}, (_, i)=> i +startNum);
};

const isPrime = n => {
    if(n < 2) {
      console.log("n<2", n);
      return false; }
    return makeArray(Math.sqrt(n) -1, 2).every(a =>
        n % a !== 0);
}; 

console.log("2", isPrime([2]));

const hasPrime = arr => arr.some(isPrime); //소수가 하나라도 있는지 판별

//assert.strictEqual(hasPrime([1, 2, 3]), true);
//assert.strictEqual(hasPrime([1,4]);
console.log("[1,2,3]", hasPrime([1, 2, 3])); // true
console.log("[1,2,4]" ,hasPrime([1, 2, 4])); // true?
// 2) 특정 배열의 원소 중 소수만 추출하는 함수를 작성하시오.
// const primeNumbers = (arr) => <이 부분을 작성하세요>;

const primeNumbers = (arr) => arr.filter(isPrime);

const arr100 = makeArray(100);
console.log(primeNumbers(arr100));

//assert.deepStrictEqual(
//  primeNumbers(arr100), 
//  [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, ]
//); 



