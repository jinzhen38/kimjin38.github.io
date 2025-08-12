/**
 * 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 
   destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getValueExceptInitial(k) { // k = 'name'
    const (가)  = user;  // user.name or user['name'] ⇒ user[k]
    const (나) = val;    // [...val]
    return (다);
}
console.log(getValueExceptInitial('name'));   // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr'));   // 'eoul' */


const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getValueExceptInitial(k) {
    const { [k]: val}  = user;    // k의 값을 프로터티 키로 
    const [, ...result] = val;    // 풀어서 배열
                                  // 읽어오지만 메모리에 담지 않는다(씹는다)
    return result.join(' ');
;
}

console.log(getValueExceptInitial('name'));   // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr'));   // 'eoul'

/*
['a', 'b'].join('') ⇒ ⇒ 'ab'
'ab'.split('') ⇒ ⇒ ['a', 'b']
const [x, y] = 'ab';  ⇒ ⇒ x = 'a', y = 'b'
*/ 