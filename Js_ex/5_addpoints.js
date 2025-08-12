/**
 * 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
(단, 소숫점 자리수는 긴쪽에 맞춘다)
0.21354 + 0.1   // 0.31354000000000004
0.14 + 0.28     // 0.42000000000000004
0.34 + 0.226    // 0.5660000000000001
function addPoints(a, b) {...}

addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)     // 0.42
addPoints(0.34, 0.226)    // 0.566
addPoints(10.34, 200.226) // 210.566
addPoints(0.143, -10.28)  // -10.137
addPoints(0.143, -10)  // -9.857
 */

// addpoitns : 특정 객체나 시스템에 점수(포인트)를 더하기 
//             function addPoint(target, value) 형태
// Math.trunc : 소수점 이하를 버리고 정수 부분만 반환하는 함수 

// plength를 정확히 정의하면 addPoints는 소수 자릿수 손실 없이 계산 결과 출력하는 데 유용

function plength(n){
    return n.toString().length - Math.trunc(n).toString().length - 1;
    // 전체 길이에서 정수길이 빼기 : 소수점 이하 길이  // 소수점(.) 한 자리 빼기
 }
function addPoints(a, b) {s
    const alen = plength(a);
    const blen = plength(b);
    console.log('alen:', alen, blen);

    const ret = (a + b).toFixed(alen > blen ? alen : blen);
     // a 보다 b가 크다면 a, 그렇지 않다면 b 반환
    console.log(a, '+' , b , '= ', +ret);
};

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226)    // 0.566
addPoints(10.34, 200.226) // 210.566
addPoints(0.143, -10.28)  // -10.137
addPoints(0.143, -10) 

