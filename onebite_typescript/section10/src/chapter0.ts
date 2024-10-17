// 유틸리티 타입
// 제네릭, 맵드, 조건부 타입 등의 타입 조작 기능을
// 이용해 자주 사용되는 타입을 미리 만들어 놓음

interface Person {
  name : string
  age : number
}

const person : Partial<Person> = {
  name : '리춘수',
  age : 55,
}

const person_name = person.name
console.log(person_name)