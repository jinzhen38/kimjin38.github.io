/**
 * 다음 코드를 올바르게 수정하시오. (1초 후에 강아지의 이름을 출력)
 * 
 * node 에서 timer 함수는 timer 객체를 default로 바인드하고 시작!
 * 
 *•setTimeout은 this를 보존하지 않음
	•	bind(this) 또는 화살표 함수로 this를 유지해야 함
 */

const dogx1 = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName, 1000); // 콜백함수 
              //this는 전역 객체(브라우저: window, Node.js: undefined)를 참조
              // 그래서 this.name은 undefined
  }
};

dogx1.whatsYourName();


// 1) bind 사용 

const dogx3 = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000); 
  }
};

dogx3.whatsYourName();

//2) 화살표함수 사용 

const dogx4 = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(()=> this.showMyName(), 1000); 
  }
};

dogx4.whatsYourName();