/* find bugs 오류 코드 수정하기 */

function flattenArray(arr) {   // arr을 인자로 받아 중첩 배열을 평탄화(flatten) 하는 함수 선언
  let result = [];
  arr.forEach((item) => {       // 입력 배열 arr의 각 요소를 반복
    if (Array.isArray(item)) {          	// 현재 항목 item이 배열이면
      result = result.concat(flattenArray(item));    // !! result에 재할당 필요
      // -> 수정: result = result.concat(flattenArray(item));
    } else {                                // 그렇지 않으면(item이 배열이 아니면,)
      result.push(item);                    // 그냥 result에 추가
    }
  });
  return result;
}

console.log(flattenArray([1, [2, [3, [4]]]]));

// concat : 배열을 이어붙이는 메서드 / 새 배열을 반환하므로 재할당 필요 
