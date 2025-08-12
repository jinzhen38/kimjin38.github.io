/** 프로퍼티 연습 문제 */

const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
for (const k in arr) {
    console.log('k:', k)
};

// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const k in arr) {
    console.log('k:', k , arr[k])
};

console.log('-------------')

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
for (const key in obj) {
  console.log(key);
}

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (const k in obj) {
    console.log('k:', k, obj[k]);
};

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for(const v of Object.values(obj)) {
    console.log('v:', v);
};

//6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
// Object.defineProperty
 Object.defineProperty(obj, 'level', {
    enumerable: false,
 });

for (const q in obj) {
    console.log('q:', q, obj[q]);
};

//7. role 프로퍼티는 읽기전용으로 설정하시오. 
Object.freeze(obj);