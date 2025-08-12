/* find bugs 오류 코드 수정하기 */

function flattenArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.concat(flattenArray(item));  // concat이 문제: concat 결과를 저장하지 않아서 result에 반영되지 않음.
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flattenArray([1, [2, [3, [4]]]]));

function flattenArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // 	result = result.concat(...)로 결과를 누적해야 정상 동작합니다.
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flattenArray([1, [2, [3, [4]]]]));

function flattenArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.concat(flattenArray(item));
      result = [...result, item]
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flattenArray([1, [2, [3, [4]]]]));


