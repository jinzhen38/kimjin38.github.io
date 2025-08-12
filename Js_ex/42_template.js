/** template tag function

 * 오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
 주문합계: 45,000원
 새액합계: 4,500원

const total = {price: 45000, vat: 4500};
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
 */

function fmt(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] !== undefined ? values[i].toLocaleString() : '';
    return acc + str + val;
  }, '');
}

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);