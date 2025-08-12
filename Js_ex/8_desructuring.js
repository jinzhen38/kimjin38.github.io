/* const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
이 user 객체를 받아서 id와 name을 출력하는 함수를 2가지 방식으로 작성하시오.

 function f1(...   
 function f2(...   


const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};
f1(hong);  f2(hong)  ⇒ 1, 'Hong' 
f1(lee);  f2(lee)  ⇒ 2, 'Lee'
*/ 

const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };

const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

// 1번 방법 
function f1({id, name}){
    console.log(id, name);
 };

f1(hong);
f1(lee);

//2번 방법 
function f2(obj) {
    const {id, name} = obj;
    // 같은 것이니 생략 : const {id:id, name:name} = obj;
    console.log(id,name);
}

f2(hong);
f2(lee);
