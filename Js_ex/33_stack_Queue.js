// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)

// 공통: clear(), print(), remove(), isEmtpy, peek, poll, length(size)
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(나올 요소 삭제하여 처리 skip)


console.log(stack.peek, queue.peek); // 마지막(다음에 나올) 원소
queue.print(); // 출력해보기
const arr = queue.toArray().map(a => console.log(a));
if (!stack.isEmpty) stack.clear();
if (queue.length) queue.clear();

// 스택 확장 
class Stack {
    #arr;               

    constructor( ... args){
        this.#arr = [...args]; 
    }
    push(x) {
        this.#arr.push(x)
    }
    pop(){
        return this.#arr.pop()
    }
    toArray(){
        return this.#arr;
    }
    get #arr(){

    }
    print(){
        console.log(`${this.constructor.name}`, this.toArray())
    }
    };


    class stack extends Collection {
      push(x) {
        this._arr().push(x);
}
}

const stack = new Stack();
stack.push();
stack.print();

class Queue extends Collection {
    enqueue(x) {
        super._arr.unshift(x);
    }

    dequeue(){
        return this.pop();
    }
    }