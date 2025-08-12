const assert = require('assert');
/** 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.*/
/**
  rules - f(s, e, step) // f(1, 5, 2) => []
 - step 기본값 = s > e ? -1 : 1 // f(5, 1, -1) => [5, 6, 7,..., 1] // 
 - 종료: step === 0 || s === e ? [s]
 - s > e 인데 step > 0 면 [ ] || e > s 인데 step < 0 면 [ ]
 - 
 - e 가 없다면,
    ⇒ s > 0 ? e = s, s = 1
    ⇒ s < 0 ? e = -1
    ⇒ s === 0 ? [0]
- 비정상(예외)
  ⇒ s > e && step > 0 ? []
  ⇒ s < e && setp < 0 ? []
  즉, (s - e) * step > 0
 */

// range 함수: 시작값부터 끝값까지 일정한 간격(step)으로 증가하거나 감소하는 숫자 배열을 생성하는 함수
// range(s, e, step) 


const range = (start, end, step = start > end ? -1 : 1) => {
    if (start === end || step === 0) return [start]; // 시작과 끝이 같거나, 스텝이 0이면 → [start] 하나만 반환
    //if(start > end && step > 0) return [start];
    //if(start > end && step < 0) return [start];
    if ((start - end) * step > 0) return []; //위에 두개 합쳐서
    
    const tmpStart = start; 
    end = end ?? (          //end = undefined일 때:
        start > 0 ? ((start = 1), tmpStart)
        : start < 0 ? -1 : 0);
 // i : 5 - 4 -3 -2 -1 
 const results = [ ];
    for (let i = start; start > end ? i >= end : i <= end ; i+= step){
        results.push(i);
    } 
    return results;
};

console.log(range(1, 10, 1));
console.log(range(5, 5, 0));
console.log(range(0, -3));
console.log(range(1, 150, 3));

/*
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);

assert.deepStrictEqual(range(50), Array.from({length: 50}, (_, i) => i + 1));
assert.deepStrictEqual(range(1, 150, 3), Array.from({ length: 50 }, (_, i)));
*/