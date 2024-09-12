// 인터페이스의 확장

interface Animal {
  name : string
  color : string
}

// 확장한 타입에서 프로퍼티를 원 프로퍼티의 서브타입으로 재정의 가능
// 원 프로퍼티와 아예 다른 프로퍼티는 재정의 불가 (인터페이스를 잘못 확장합니다 오류)
// 인터페이스가 아니라 type이라도 확장 가능
// 인터페이스는 다중 확장이 가능하다

interface Dog extends Animal {
  isBark : boolean
}

const dog : Dog = {
  name : '바둑이',
  color : 'yellow',
  isBark : true
}

interface Cat extends Animal {
  isScratch : boolean
}

const cat : Cat = {
  name : '점박이',
  color : 'black',
  isScratch : false
}

interface Chicken extends Animal {
  isFly : boolean
}

interface DogCat extends Dog, Cat {} // 다중 확장, 두 개의 프로퍼티 모두 포함

const dogCat : DogCat = {
  name : '흰둥이',
  color : 'white',
  isBark : true,
  isScratch : true
}