// 인터페이스
interface Person {
  readonly name : string
  age? : number
  sayHi(): void
  sayHi(a: number, b: number): void // 호출 시그니처는 이렇게
}

const person : Person = {
  name : '박지원',
  sayHi: function () {
    console.log('안녕')
  }
}

person.sayHi()
person.sayHi(1, 2)