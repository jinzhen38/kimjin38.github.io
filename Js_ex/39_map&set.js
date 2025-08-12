/* 다음과 같은 집합 A, B, C가 있을 때,
각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.
const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];
intersect(A, B); // [1, 3, 5]
intersect(A, C); // [3, 4]
diff(A, B); // [2, 4]
diff(B, A); // [22, 44]
diff(A, C); // [1, 2, 5]
diff(B, C); // [1, 22, 44, 5]
union(A, B); // [1, 2, 3, 4, 5, 22, 44]
union(A, C); // [1, 2, 3, 4, 5, 11, 222, 555]
*/ 

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

// 교집합
function intersect(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(v => set2.has(v)))];
};
console.log(intersect(A, B));
console.log(intersect(A, C));

// 차집합: arr1 - arr2
function diff(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(v => !set2.has(v)))];
};
console.log(diff(A, B));
console.log(diff(B, C));

// 합집합
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}; 
console.log(union(A, B));
console.log(union(A, C));