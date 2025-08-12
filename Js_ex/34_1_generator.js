/** 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);

(실행 결과: 1과 2를 넣었을 때)
첫 번째 수?  → 1   next(1)
두 번째 수?  → 2
Total: 3
 */

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
 // 키보드, 모니터 

const rl = readline.createInterface({ input, output });

function* add() {
  const a = yield 'firsft num:';
  const b = yield 'second num:';
  return a + b;
}

const adder = add();
let step = adder.next(); // 첫 실행: yield 'first num:'

console.log(step.value); // 콘솔에 "first num:" 출력

rl.on('line', answer => {
  if (answer === 'bye') {
    rl.close();
    return;
  }

  const parsed = Number(answer);

  // 제너레이터에 값 전달
  step = adder.next(parsed);

  if (step.done) {
    console.log('Total:', step.value);
    rl.close();
  } else {
    console.log(step.value); // 다음 질문 출력 (ex: "second num:")
  }
});

rl.on('close', () => {
  process.exit();
});
