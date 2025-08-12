/**
 * 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, 
    switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
 const today = new Date();
 today.getDay(); // 요일번호 (0 ~ 6)
 WEEK_NAMES[1]
 오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')
 */

 // switch : 하나의 표현식을 여러 경우(case)에 따라 분기 처리
 // today.getDay();  요일번호 (0 ~ 6) 

const today1 = new Date().getDay();   // 오늘의 요일을 숫자로 가져옴 
switch(today1){
    case 0:
    console.log("오늘은 일요일입니다.");
    break;
    case 1:
    console.log("오늘은 월요일입니다.");
    break;
    case 2:
    console.log("오늘은 화요일입니다.");
    break;
    case 3:
    console.log("오늘은 수요일입니다.");
    break;
    case 4:
    console.log("오늘은 목요일입니다.");
    break;
    case 5:
    console.log("오늘은 금요일입니다.");
    break;
    case 6:
    console.log("오늘은 토요일입니다.");
    break;
    default :
    console.log("오류:알 수 없는 요일입니다.");
};

// 다른 방식2 
const today2 = new Date().getDay();
let weekName;
switch(today2){
    case 0:
     weekName = '일';
     break;
    case 1:
     weekName = '월';
     break;
    case 2:
     weekName = '화';
     break;
    case 3:
     weekName = '수';
     break;
    case 4:
     weekName = '목';
     break;
    case 5:
     weekName = '금';
     break;
    case 6:
     weekName = '토';
     break;
    default:
     weekName = '알 수 없음!';
     // throw new Error('알수없는 요일!!')
    break;
};

console.log(`오늘은 ${weekName}요일입니다.`); // 이 방식 선호
//위와 동일 : console.log('오늘은' + weekName +'요일입니다');


// 다른 방식3 
const today = new Date().getDay();
let weekName1 = '일월화수목금토' [today];  // 문자열에서 today번째 글자 추출
console.log(`오늘은 ${weekName1}요일입니다.`);

//다른 방식4
const now = new Date();
const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
console.log(`오늘은 ${weekdays[now.getDay()]}입니다.`);