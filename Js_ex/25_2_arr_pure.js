const assert = require('assert');

/** 아래 users 배열에 대하여 추가/수정/삭제하는 - 순수 함수를 작성하시오.*/

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

// 1) 추가 
const addUser = (users, addUser) => [...users, addUser];
              //매개변수          => 기존 배열 복사 , 추가한 새배열 반환

console.log(addUser(users, hong));
console.log(users);  

// 2) 제거 
const removeUser = (users, removeUser) =>
    users.filter(user => user.id !== removeUser.id);
          //순회하면서 일치하지 않는 항목만 새배열에 포함 

console.log(removeUser(users, lee));
console.log(users); 

// 3) 수정 
const changeUser = (users, changeUser) =>
  users.map(user => user.id === changeUser.id ? changeUser : user);

console.log(changeUser(users,kim,choi));



assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

