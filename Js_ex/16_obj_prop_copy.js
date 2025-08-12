/**
Shallow Copy (얕은 복사): 객체의 최상위 값만 복사, 중첩된 객체는 참조 공유
Deep Copy (깊은 복사): 객체의 모든 깊이까지 값 복사, 참조 공유 없음*/ 

 /* 
 * 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 
 * Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
 * 

 // 1) shallow copy
const kim = {nid: 3, nm: 'Kim', addr: 'Pusan'};
const newKim1 = shallowCopy(kim);
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr); // true면 통과!
 */

const kim = {nid: 3, nm: 'Kim', addr: 'Pusan'};
const newKim1 = {...kim};
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr);

// 다른 방식 
function shallowCopy(obj){
    const ret = {};         // 복사 결과를 저장할 객체
    for (const [k, v] of Object.entries(obj)) { // Object.entries(obj)는 객체의 키-값 쌍을 배열 형태로 반환
        ret[k] = v;     // 원래 객체의 키-값을 복사본에 그대로 할당
}
return ret;
}
const newKim3 = shallowCopy(kim)
// const newKim3 = Object.assign({},kim); 위와 같음
// const newKim3 = {...kim};
newKim3.addr = 'Daegu';
console.log(kim.addr !== newKim3.addr);

/* 2) 이하 deep copy
const kim2 = {nid: 3, nm: 'Kim', addr: {city: 'Pusan', road: 'Haeundaero', zip: null }};
const newKim2 = deepCopy(kim2); 
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
*/

const kim2 = {nid: 3, nm: 'Kim', addr: {city: 'Pusan', road: 'Haeundaero', zip: null }};

function deepCopy(obj){
    const ret = {};
    for (const [k, v] of Object.entries(obj)) {
        ret[k] = typeof v === 'object' ? { ...v} : v ;
        // v가 객체인지 검사 (typeof v === 'object'), 객체면 얕은 복사
        // 객체가 아니면 값 그대로 복사 -> v
}
return ret;
}

const newKim2 = deepCopy(kim2); 
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city);

/**
 * const deepCopy = structuredClone(user);
 * lodash: _.cloneDeep()
 */