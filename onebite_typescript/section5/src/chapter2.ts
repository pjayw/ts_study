// 선언 합침

interface Person {
  name : string
}

interface Person {
  age : number
}

// type과 달리 interface는 중복 선언 시 프로퍼티가 합쳐짐

const person : Person = {
  name : '김점례',
  age : 27,
}

interface Developer extends Person {
  name : 'hello'
}

// 모듈 보강 시 합침 사용

interface Lib {
  a : number
  b : number
}

interface Lib {
  c : string
}

const lib = {
  a : 1,
  b : 2,
  c : 'hello'
}

// 추가 프로퍼티가 필요할 시 위와 같이 프로퍼티를 추가하는 데 사용