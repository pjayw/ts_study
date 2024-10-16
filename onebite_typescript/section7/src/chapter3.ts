// 제네릭 인터페이스와 제네릭 타입 별칭

interface KeyPair<K, V> {
  key : K
  value : V
}

let keyPair : KeyPair<string, number> = {
  key : 'key',
  value: 0,
}

let keyPair2 : KeyPair<boolean, string[]> = {
  key : true,
  value : ['1'],
}

// 인덱스 시그니쳐

interface NumberMap {
  [key : string]: number;
}

let NumberMap1: NumberMap = {
  key : -1231,
  key2 : 213123,
}

interface Map<V> {
  [key: string] : V
}

let stringMap : Map<string> = {
  key : 'value',
}

let booleanMap : Map<boolean> = {
  key : true,
}

// 제네릭 타입 별칭

type Map2<V> = {
  [key : string] : V
}

let stringMap2 : Map2<string> = {
  key : 'hello',
}

// 제네릭 인터페이스 활용 예시 => 유저 관리 프로그램
// 학생 유저 / 개발자 유저 두 가지로 나뉨

interface Student {
  type : 'student'
  school : string
}

interface Developer {
  type : 'developer'
  skill : string
}

interface User<T> {
  name : string
  profile : T
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school
  console.log(`${school}로 등교 완료`)
}

const developerUser : User<Developer> = {
  name : '김동우',
  profile : {
    type : 'developer',
    skill : 'typeScript',
  }
}

const studentUser: User<Student> = {
  name : '장필우',
  profile : {
    type : 'student',
    school : '부산가톨릭대학교',
  }
}