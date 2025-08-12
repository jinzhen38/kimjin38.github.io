/** class와 Array를 이용하여 Stack과 Queue를 구현하시오.

ex1) Stack
const stack = new Stack(); // or new Stack(1,2); // ⇐⇒ (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기

ex2) Queue
const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
 */

// Stack : LIFO (Last In, First Out)
class Stack {
    #arr;                        // #arr는 private 필드    
                                 // 클래스 내부에서만 접근할 수 있는 비공개 속성
    constructor( ... args){
        this.#arr = [...args]; 
    }
    push(x) {
        this.#arr.push(x)
    }
        pop(){
            return this.#arr.pop()
        }
    };

const stack1 = new Stack(1,2); // or new Stack(1,2); // ⇐⇒ (1,2)
stack1.push(3); // 추가하기
console.log(stack1.pop()); // 마지막에 추가된 하나 꺼내기


// ex2) Queue : FIFO (First In, First Out)
class Queue {
    #arr;
    constructor( ... args){
        this.#arr = [...args];
    }
    enqueue(x) {                //	enqueue(x): 큐에 요소를 추가
        this.#arr.unshift(x);   // 	unshift는 배열 맨 앞에 추가
    }

    dequeue(){
        return this.#arr.pop()        
    }

    toArray(){
        return [...this.#arr];  // 복사된 배열 반환
    }
};


const queue1 = new Queue();
queue1.enqueue(3); // 추가하기
queue1.enqueue(2); // 추가하기
console.log(queue1.dequeue()); // 


class Collection{
        #arr;
    constructor( ... args){
        this.#arr = [...args]; 
    }
        pop(){
            return this.#arr.pop()
        }
         toArray(){
        return this.#arr;
        }
        get arr() {
            return this.#arr;
        }
}

class stack2 extends Collection {
      push(x) {
        this.arr().push(x);
}
}

class queue2 extends Collection {
    enqueue(x) {
        super.arr.unshift(x);
    }

    dequeue(){
        return this.pop();
    }
    }