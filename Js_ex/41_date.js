
// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

const date1 = new Date('1970-01-01T00:00:00Z');
const date2 = new Date('1970-01-02T00:00:00Z');
const diffInSeconds = (date2 - date1) / 1000;

console.log(diffInSeconds); // 86400


// 2) 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); // 0-based
const daysInMonth = new Date(year, month + 1, 0).getDate();

const randomDates = Array.from({ length: 5 }, () => {
  const day = Math.floor(Math.random() * daysInMonth) + 1;
  return new Date(year, month, day);
});

randomDates.sort((a, b) => b - a);
console.log(randomDates);


// 3) 내년(2025년)의 오늘의 요일을 출력하시오.
 
const today = new Date();
const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
const days = ['일', '월', '화', '수', '목', '금', '토'];
console.log(days[nextYear.getDay()]);


// 4) 오늘로 부터 100일 후의 날짜는?

const nowDate = new Date();
const after100Days = new Date(nowDate);
after100Days.setDate(nowDate.getDate() + 100);
console.log(after100Days.toDateString());
