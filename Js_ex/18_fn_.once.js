/** 함수를 한번만 실행하게 하는 once 함수를 작성하시오.
ex)
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
*/

// once + 일정 시간(rebirthDelay) 후에 다시 실행 가능 : 고차함수 
const once1 = (f, rebirthDelay = 0) => {
    let didRun = false;
    if (rebirthDelay)
      setInterval(() => {
    didRun = false;
  }, rebirthDelay);
    return function(...args){
        if(!didRun) {
            didRun = true;
           // return f(...args);
          return f.apply(this, args);         
    }
}
};

console.log('----------')

// 문제 풀이 (범용)
const once2 = f => {  // 매개변수 f는 한 번만 실행되도록 감쌀 대상 함수
  let done = false;
  return(...args) => {  // 호출 시 몇 개의 인자가 오든 모두 받아서 배열 args로 저장.
    if(done) return;  // done이 true면 이미 실행된 상태 → 아무것도 하지 않고 종료.
    done = true;   // 처음 실행된 경우, done을 true로 설정 → 이후 실행 방지.
    return f(...args);
  };
};

const fnx = once2((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fnx(1, 6)); // 금일 운행금지 차량은 끝번호 1,6입니다!
console.log(fnx(2, 7)); // undefined
console.log(fnx(3, 8)); // undefined 


// this 사용 
const once = function(f) {
  let done = false;
  return function(...args) {
    if (done) return;
    done = true;
    return f.apply(this, args); // this를 현재 호출 컨텍스트로 유지
  };
};

// 다르게 표현  (질문사항임!!)
const once3 = f => {  
  let done = false;
  return(...args) => {  
    if(done) return;  
    done = true;   
    return f(...args);
  };
};

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
};

const fnx2 = once3(fivePart.bind({id:11}));
console.log('fnx2>>',fnx2(1,2));

const fn2 = once3.bind({id:33})(fivePart);
const fn3 = fn2.bind({id:22});
console.log(fn3(3, 4));


/* 추가 사항 
* 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
  (test 요령: 0.1초 한 번씩 - setInterval - 실행하게 해놓고, 1초 후에 초기화)
cf. function onceAgain(f, rebirthDelay = 1000) {}
 

const onceAgain = (f, rebirthDelay) => {
  let done = false;
  return (...args) => {
    if(done) return;
    done = true;

    return f(...args);
  };
};

const fn1sec = onceAgain(fivePart, 1000);
let cnt = 0;

const cb = () => console.log(`${cnt*0.1}초`, fn1sec(++cnt, 0.1));
setInterval(cb,100); 


/*
const intl setInterval() => {
  console.log('xx'= new Date(), fn(5,6));
}, 200);
console.log('intl:', intl);
*/
