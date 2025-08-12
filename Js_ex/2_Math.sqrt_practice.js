/* 
1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오. 
Math.sqrt() 사용, 무리수만 출력!

2 1.414
…
7 2.646
…
10 3.162
*/ 

// Math.sqrt(x) :  숫자 x의 제곱근(square root)을 반환
// 소수점 3자리 : toFixed(3)

for (let i = 1 ; i <=10 ; i++){
    const ms = Math.sqrt(i);  // 현재 숫자 i의 제곱근을 계산해서 변수 ms에 저장
    console.log(ms.toFixed(3)); // ms의 값을 소수점 셋째 자리까지 반올림해서 숫자로 출력
};


// 위에서 무리수만 출력하려면? 
for (let i = 1; i <= 10; i++) {
  const s = Math.sqrt(i);
  if (!Number.isInteger(i)) {   // Number.isInteger(i)는 변수 i가 정수인지 확인
    console.log(i, +s.toFixed(3));
  }
}

console.log('------------')
// 다른 방식 
for(let j=1; j<=10; j++){
    const t = Math.sqrt(j)
    if (t % 1 === 0) continue; 
    // t가 정수면(나머지 0) → 정수 제곱근 → 건너뜀 (continue) 즉, 무리수만 통과

    console.log(j, +t.toFixed(3))
} 

// continue 문,  s % 1 === 0 조건 

console.log('------------')
// 다른 방식 
for (let i = 1; i <= 10; i += 1) {
  const root = Math.sqrt(i);
  if (root % 1) 
    console.log(i, root.toFixed(3));
};