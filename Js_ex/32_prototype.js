/** 모든 Array가 다음 기능을 갖도록 구현하세요.
1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
2) firstObject, lastObject
*/

// prototype 으로 기능 추가하기 
// Array.prototype에 커스텀 메서드를 정의한 예제
const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: 'Hing' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

//1)mapBy()
// 배열 요소 각각의 key 값만 추출해 새로운 배열을 만듦
Array.prototype.mapBy = function(key) {
    return this.map(a => a[key]);
};

//2)finddBy()
// findBy(key, value)는 배열에서 key === value인 첫 번째 요소를 반환
Array.prototype.findBy = function (key, value) {
      return this.find(a => a?.[key] === value);
    };                  // 배열 요소 a의 key에 해당하는 속성값이 value와 같은지 비교 
                        // ?. : 옵셔널 체이닝 - a가 null 또는 undefined일 경우 undefined 반환

//3)filterdBy()
// 특정 속성(prop)이 주어진 값(val)과 일치하거나 포함하는 요소를 걸러냄
Array.prototype.filterBy = function(prop, val, 
    isInclude = false) {        // isInclude: 부분 포함 여부를 나타내는 불리언 (기본값 false)
    return this.filter(a => 
        isInclude ? a[prop].includes(val) : a[prop] === val);
};      // isInclude가 true일 경우: a[prop]이 문자열이고 val을 포함하면 통과
        //  false일 경우: a[prop] === val인 경우만 통과


// rejectBy()
// 특정 속성(key)이 주어진 값(value)과 같지 않은 항목만 남기는 함수
Array.prototype.rejectBy = function (key, value) {
      return this.filter(a => a?.[key] !== value); 
    };                                  // 같지 않은 경우만 배열에 남긴다.


// sortBy()
// 특정 키(key)를 기준으로 오름차순 정렬된 새 배열 반환
Array.prototype.sortBy = function (key) {
      return [...this].sort((a, b) => {  // 현재 배열(this)을 복사한 새 배열을 .sort()로 정렬.
        const valA = a?.[key];      // 요소 a의 key값을 valA에 저장
        const valB = b?.[key];
        if (valA < valB) return -1; // valA가 valB보다 작으면, a를 앞에 오도록 함.
        if (valA > valB) return 1; // valA가 valB보다 크면, b를 앞에 오도록 함.
        return 0; // 두 값이 같으면 위치 변경 없음.
      });
    },

// firstObject , lastObject
// 두 개의 getter 속성을 추가
Object.defineProperties(Array.prototype, {
    firstObject : {             // 배열.firstObject를 호출하면 
        get() {
            return this[0];         // 배열의 첫 번째 요소를 반환
        },
    },
    lastObject :{               //배열.lastObject를 호출
        get() {
        return this[this.length - 1]; // 배열의 마지막 요소를 반환.
    }
    }
});


/**
assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);
assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]); // key, value일부, isInclude
assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);

 */