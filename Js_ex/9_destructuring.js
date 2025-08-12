/* 
다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
delete user.passwd;
Object.definedProperty(user, 'passwd', {enumerable: false});
const {...} = user;
console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

*/

// 구조 분해 할당(destructuring assignment)**과 
// rest 연산자를 사용하면 passwd를 제외한 나머지 프로퍼티만 추출할 수 있습니다.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}

const {passwd, ...userInfo } = user; 
console.log(userInfo);

/* rest 연산자 
const runners = ["Tom", "Paul", "Mark", "Luke"];

// 1등과 2등만 따로 뽑고 나머지(rest)는 losers로 처리했다.
const [first, second, ...losers] = runners;

// 현재 losers는 [Mark", "Luke"]인 상태다.
// 이 배열을 spread 연산자로 '펼쳐서' 콘솔에 출력한다.
console.log(...losers); // Mark Luke

*/ 