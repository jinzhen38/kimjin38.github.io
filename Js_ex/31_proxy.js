/** (질문)
 Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고,
 proxy 생성자 함수를 이용하여 구현하시오.

class Emp {
  firstName;
  lastName;
}

const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName);     // 'Kildong HONG' 출력하면 통과!
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 출력하면 통과!
 */

// Accessor Property (getter/setter) 사용하지 않기
// proxy : 객체 속성 접근/설정을 가로채 처리

class User { 
  constructor(){                 // 생성자 함수
    return new Proxy(this, {        // 실제로는 Proxy 객체가 생성
        get(target, prop, receiver) {
          if(prop === 'fullName') {
            return `${target.firstName} ${target.lastName}`;
          }       // fullName 속성에 접근하면 "firstName lastName" 형식으로 반환
        },
        set(target, prop, value, receiver) {
          const [f,l] = value.split(' ');
          target.firstName = l ? f : target.firstName;
          target.lastName = l ? l : f; // 한 단어만 입력되면 lastName만 변경
        },
        });
      }
    };

class Emp {
  firstName;
  lastName;
}
// 한 단어만 입력되면 lastName만 변경

const hong = new Emp();
const proxyObj = new Proxy(hong, {
  get(target, prop, receiver) {
  if(prop === 'fullName') {
    return `${target.firstName} ${target.lastName}`;
  }
},
set(target, prop, value, receiver) {
  const [f,l] = value.split(' ');
  target.firstName = l ? f : target.firstName;
  target.lastName = l ? l : f;
},
});


proxyObj.fullName = 'kildong Hong'
console.log(hong.fullName);     // 'Kildong HONG'  - undefined ??? 오류 어디?
proxyObj.fullName = 'Lee';
console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 
