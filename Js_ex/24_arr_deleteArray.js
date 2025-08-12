/* (시험)
다음과 같은 deleteArray를 순수 함수로 작성하시오. (단, key는 모두 string)
Array.prototype.filter()
const arr3 = [1, 2, 3, 4];
*/ 

// Array.prototype.filter()
// 객체를 다루기 때문에 array. filter 사용 

const arr = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];

const assert = require('assert');
assert.deepStrictEqual(deleteArray(arr, 5, 6), [1, 2, 3, 4, 5, 6]);    
// 2번 인덱스 부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr3, 1, 3), [1, 4]); 
// 1번 인덱스 부터 3번 인덱스 앞까지 지우고 나머지 리턴
assert.deepStrictEqual(arr3, [1, 2, 3, 4]); 
// 순수함수 체크

const deleteArray = (array, startIdxOrKey, endIdxOrValue = array.length) => {

    if (typeof startIdxOrKey === 'number')
    return array.filter((__, i) => i < startIdxOrKey || i >=  endIdxOrValue);
    else 
    return array.filter(a => a[startIdxOrKey] !== endIdxOrValue);
};

// 다른 방식 표현 (삼항 연산자)

const deleteArray2 = (array, startIdxOrKey, endIdxOrValue = array.length) => {
    const cb = 
    typeof startIdxOrKey === 'number' ? 
    (__, i) => i < startIdxOrKey || i >=  endIdxOrValue
    : a => a[startIdxOrKey] !== endIdxOrValue;
};
return array.filter(cb);



// 실무 활용
const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);

