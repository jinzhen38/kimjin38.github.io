/* 
for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);  // right??
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1 
*/ 

// for 문 : for (초기값, 조건식, 증감)

/**
 * const plus = [];
for(let i = 1 ; i <=10, i++);
console.log(plus i/10);
*/

// 부동소수점(floating point) 오류 없이 0.1부터 1.0까지 0.1씩 증가하며 출력하려면, 
// 정수 기준으로 계산하는 것이 정확
// 정수 기반 반복 + toFixed(x) - 소수점 x 자리까지만 남김 

for(let i = 1; i <= 10; i++){
    console.log(+(i/10).toFixed(1));
};

/*
for(let i = 0.1; i < 1; i + 0.1){  //  (오류) 여기에서 i는 변하지 않음
    const rest = +i.toFixed(1);
    console.log(rest);
}
*/

for(let i = 0.1; i <= 1; i += 0.1) {  // i += 0.1 - i를 실제로 0.1씩 증가시킴
    const rest = +i.toFixed(1); // 반올림해서 부동소수점 오차 제거 / + : 숫자로 변환
    console.log(rest);  
}

for(let i = 0.1; i <= 1; i = i + 0.1) { 
    console.log(+i.toFixed(1)); 
}