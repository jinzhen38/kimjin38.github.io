/** 
 * getNextWeek 함수는 widx변수에 부수 효과(side effect)가 있다.
  이를 부수 효과가 없도록 변경하시오. 
  */
/*

const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = (() => {        // 즉시실행함수, 클로저구조
let widx = -1;                     // 현재 요일의 인덱스를 추적하는 변수 - 클로저
return () => {}

const getNextWeek = () => {
  widx += 1;                    // side-effect! 외부에 있는 변수 
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};
})();

let cnt = 0;                         // cnt: 실행 횟수를 세는 변수
const intl = setInterval(() => {        // 1초마다 콜백 함수 실행
                                        // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl); // cnt가 8이 되면 setInterval 종료
}, 1000);

*/

// 부수 효과 없도록 변경 

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