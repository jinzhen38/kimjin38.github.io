const assert = require('assert');
/** 아래 users 배열에 대하여 추가/수정/삭제하는 함수를 작성하시오.*/ 

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

// 1) 추가 
users.addUser = user => [...users, user];
Object.defineProperty(users, 'addUser', { enumerable: false });

let b = users.addUser(park);
// b.at(-1).name2 = 'tttt'
// console.log('park', park)
let a = users.addUser(choi);
console.log(b);
console.log(b);
console.log(users);

/* 다른 방식 
users.addUser = function(newer) { 
    return [... this, newer]
 };
*/ 

// 2) 삭제
users.removeUser = user => users.filter(u => u.id !== user.id);
Object.defineProperty(users, 'removeUser', {enumerable: false });
console.log(users.removeUser(lee));  

// 3) 수정 
users.changeUser = (older, newer) => 
    users.map(user => user.id === older.id ? newer : user);

Object.defineProperty(users, 'changeUser', {enumerable: false });
console.log(users.changeUser(kim,choi));

/*중복 부분 합치기 
// Object.defineProperty(users, 'changeUser', {enumerable: false });
['addUser', 'removeUser','changeUser'].forEach(
    fnName => 
        Object.defineProperty(users, fnName, {
    enumerable: false})
);
*/ 
/* 또 다른 방식으로 합치기  
const fnNames = Object.keys(users).filter(isNaN);

fnNames.forEach(fnName => 
    Object.defineProperty(users, fnName, {
    enumerable: false})
);
*/ 


assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

