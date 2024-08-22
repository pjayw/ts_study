// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입, 교집합 타입 존재

// 1. 합집합 - Union 타입

let a: string | number | boolean
a = "alexis" + 10
a = true

let arr: (number | string | boolean)[] = [1, "Hello", true]

type Dog = {
  name: string
  color: string
}

type Person = {
  name: string
  language: string
}

type Union1 = Dog | Person

let union1: Union1 = {
  name: "돌돌이",
  color: "yellow",
}

let union2: Union1 = {
  name: "산체스",
  language: "라틴어",
}

let union3: Union1 = {
  name: "강백호",
  color: "yellow",
  language: "히브리어"
}

// 2. 교집합 타입 - Intersection 타입

let variable: number & string
// 교집합이 없다 => never 타입으로 잡힘

type Intersection = Dog & Person

let intersection1: Intersection = {
  name: "냠돌이",
  color: "black",
  language: "중국어",
}