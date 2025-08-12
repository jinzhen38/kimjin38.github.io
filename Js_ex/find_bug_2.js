/* find bugs 오류 코드 수정하기 */

function Dog(name, power) {
  const dog = {};       // 빈 객체 생성 
  dog.name = name;
  dog.power = power;

  return dog;
}

Dog.prototype.eat = function (amount) { 
  // maxx는 Dog.prototype을 상속받지 않으므로 eat 메서드를 가질 수 없음 → 오류 발생
  console.log(`${this.name} is eating.`);  
  this.power += amount;
};

const maxx = new Dog('Maxx', 7); 
  // new Dog()을 사용 - 내부에서 this를 쓰지 않고 직접 dog 객체를 만들어 반환함
maxx.eat(5);


// 1) 수정 : 생성자 함수 만들기,this 
function Dog(name, power) {
  const dog = {};       
  this.name = name;
  this.power = power;
}

Dog.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);  
  this.power += amount;
};

const maxx2 = Dog('Maxx', 7); 
maxx2.eat(5);

// 2) 수정 
function Dog(name, power) {
  const dog = Object.create(Dog.prototype);     
  dog.name = name;
  dog.power = power;

  return dog;
}

Dog.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);  
  this.power += amount;
};

const maxx3 = Dog('Maxx', 7); 
maxx3.eat(5);


// 3) 수정 - 팩토리 함수 방식
function Dog(name, power) {
  return {
    name,
    power,
    eat(amount) {
      console.log(`${this.name} is eating.`);
      this.power += amount;
    },
  };
}

const maxx4 = Dog('Maxx', 7);
maxx4.eat(5);