/* 다음 소수 배열의 평균을 소수점 2자리까지 구해보세요.
(단, toFixed를 사용하지 말고, 정상적인 숫자가 아닌 경우는 평균에서 제외하세요!)
const prices = [10.34232323, 15, 'xxx', 5.67899, null, 20.9, 1.005121, 0, 15.234, undefined, 0.5];

avg: 8.58
*/ 

// 평균 : sum/cnt
// 숫자 아닌 것 제외 : for / if / 숫자만 추출
// tofixed : const avg = (sum / (cnt * P)).tofixed(2)


const prices = [
    10.34, 
    15, 
    'xxx', 
    5.678, 
    null, 
    20.9, 
    1.005, 
    0, 
    19, 
    undefined,
    '0.5',
];

/* 질문 
const numberArray = prices.filter(n => typeof n === 'number' && !isNaN(n));

const sum = numberArray.reduce((acc, cur) => acc + cur, 0);

const avg = sum / validNumbers.length;
const result = Math.round(avg * 100) / 100; 
console.log(result);

*/

const P = 10 * 10;
const PointLength = 10 ** 2;
let sum = 0;
let cnt = 0;
for(const n of prices) {
    if (n === null || isNaN(n)) continue;
    cnt += 1;
    sum += Math.trunc(n * P);
}

const avg = Math.trunc(((sum / P)* PointLength)/ cnt)/PointLength;
console.log(avg);