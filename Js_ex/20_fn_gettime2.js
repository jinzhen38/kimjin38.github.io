/** 
 * getNextWeek 함수를 발전시켜 다음과 같이 각 수업 별 요일을 선택하는 HTML을 작성하시오.
 * (각각 요일 순회하는 순수함수로 작성)
 * pure function + callback function
 */

const getNextWeek = (() => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  let widx = -1;

  return () => `${weeks[++widx]}요일`;
})();

let cntx = 0;                         
const intl = setInterval(() => {        
  console.log('call', cntx, getNextWeek());
  if ((cntx += 1) === 7) clearInterval(intl); 
}, 1000);

