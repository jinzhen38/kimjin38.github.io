/** 이전 챕터에서 작성한 Stack과 Queue 클래스를 iterator로 작성하시오.
(iterable한 클래스로 작성하세요)   iterator or generator 모두 사용 가능!


console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);
const itStack = stack[Symbol.iterator]();  // 또는 const itStack = stack.iterator();
console.log(itStack.next());
console.log(itStack.next());
...
const itQueue = queue.iterator();
console.log(itQueue.next());
*/

