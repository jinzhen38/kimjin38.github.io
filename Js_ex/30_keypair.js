/** 
다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)함수를 작성하시오. 
(O(n^2) 이면 fail!!)
 */

const keyPair = (arr, n) => {
    const cache = { };              // 빈 객체 cache 선언 {6:0, 4:1}
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];         // 현재 인덱스의 값을 val에 저장
        if (cache[val])             // val이 cache에 이미 있다면 (즉, val + arr[cache[val]] === n이면)
            return [cache[val], i]; // 저장된 인덱스(cache[val])와 현재 인덱스(i)를 배열로 반환
         // 두 수의 합이 n인 쌍을 찾은 것
        cache[n - val] = i; // 
    }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);


// const keyPair = (arr, n) => {}
    // arr: 정수 배열 , n: 목표 합 (두 수의 합이 이 값이 되도록)
