const assert = require('assert');
const arr = [1, 2, 3, true];

// 1) 배열의 각 원소를 String으로 변환하시오.
// const ret1 = arr.map.    (<이 부분을 작성하시오>);
const ret1 = arr.map(String);
 // (a => `${a}`) 또는 tostring
console.log(ret1); // [ '1', '2', '3', 'true' ]

 assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// const classNames = (...args) => <이 부분을 작성하시오>; 

const classNames = (...args) => args.filter(a => !!a).join(' ')
        // ...args: 여러 개의 인자를 배열  
        //  false로 평가되는 값('', null, undefined, 0, false) 제거
        // join(' '): 남은 문자열들을 공백으로 연결하여 하나의 문자열로 만듦 
const ret2 = classNames('', 'a b c', 'd', '', 'e'); 

assert.strictEqual(ret2, 'a b c d e'); 
// 주의: ' a b c d  e'면 안됨!!

console.log(ret2); // a b c d e