// keyof 연산자
// 타입에만 사용 가능하다

type Person = typeof person

// interface Person {
//   name : string
//   age : number
// }

// key : keyof typeof person 도 가능하다.
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key]
}

const person = {
  name : '이정환',
  age: 27,
}

getPropertyKey(person, 'name') // 이정환

typeof person === 'object'