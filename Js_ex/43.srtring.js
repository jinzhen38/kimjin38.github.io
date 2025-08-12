/* 1) 문자열 str에서 대문자만 골라 소문자로 변환하세요. 
(trythis: 대문자 <-> 소문자)

upperToLower('Senior Coding Learning JS');  
         // ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-' 
*/

function upperToLower(str) {
  return str.replace(/[A-Z]/g, ch => `*${ch.toLowerCase()}*-`);
}

const result = upperToLower('Senior Coding Learning JS');
console.log(result);  // *s*-enior *c*-oding *l*-earning *j*-*s*-

// upperToLower 함수 : 문자열에서 대문자만 찾아 소문자로 바꾸고, *로 감싸서 출력하는 함수
// [A-Z]/ : A부터 Z까지의 대문자 하나를 의미하는 정규식 패턴
// [A-Z]/g : 문자열에서 모든 대문자 찾기
// replace 메서드 : 패턴에 일치하는 부분을 새로운 값으로 바꿔줌
// replace(…, ch => …) : replace(pattern, new)
// ch => ... : 대문자 하나가 발견될 때마다 실행되는 콜백 함수
// toLowerCase() : 대문자를 소문자로 변환


// 1-2) 소문자 -> 대문자 함수 */
function lowerToUpper(str) {
  return str.replace(/[a-z]/g, ch => `*${ch.toUpperCase()}*-`);
}
const result2 = lowerToUpper('Senior Coding Learning JS');
console.log(result2);

// 1-3) 소문자 <-> 대문자 변환 함수 
function swapCase(str) {
  return str.replace(/[a-zA-Z]/g, ch =>
    ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
  );
}
const result3 = swapCase('Senior Coding Learning JS');
console.log(result3);

