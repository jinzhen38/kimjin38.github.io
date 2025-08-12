/**
 * 다음 코드에 있는 template 함수를 작성하시오. 
 * 
 * const before = () => console.log('before....');
const after = (result) => console.log('after...', result); // result는 f의 결과!

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) => `${id}/${nickname}/${email}/${level}`;

const template = // 코드를 완성하세요.

const temp = template(someFn);  // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

temp('sico', 'hello');
console.log('temp1>>', temp2(1, 'sico', 'sico@gmail.com', 5));
 */


// 템플릿 함수 : 백틱(` `) / ${} 

const before = () => console.log('before....');
const after = (result) => console.log('after...', result); // result는 f의 결과!

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) => 
    `${id}/${nickname}/${email}/${level}`;

const template = f => { 
    return(...args) => {
        before();              // 원래 함수 f를 실행하기 직전에 수행할 공통 작업
        const r = f(...args);    // 함수 f를 실제로 실행하고, 결과를 r에 저장.
        setImmediate(() => after(r)); // after는 원래 함수 실행 후에 처리할 후속 로직
        return r;           // setImmediate는 이벤트 루프에서 바로 다음 주기
    };
};
// 함수 f의 실행을 **공통 전처리(before)와 후처리(after)**로 감싸서 재정의하는 패턴

const temp1 = template(someFn);  // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

console.log('temp1>>', temp1 ('sico', 'hello'));
// 함수 temp1을 호출하고 그 결과를 "temp1>>"와 함께 출력하는 코드 
// before....
// temp1>> hello, sico
// after... hello, sico

console.log('temp2>>', temp2(1, 'sico', 'sico@gmail.com', 5)); 
// efore....
// temp2>> 1/sico/sico@gmail.com/5
// fter... 1/sico/sico@gmail.com/5


/** 또 다른 표현 */
const template2 = f => { 
    return(...args) => {
        before();   
        const result = f(...args);
        process.nextTick();
        _dirname       
        return result;          
    };
};