// 기본 타입 간의 호환성

let num1: number = 10
let num2: 10 = 10

num1 = num2
// num2 = num1 => number 리터럴 타입은 number 타입의 아래집합

// 객체 타입 간의 호환성

type Animal = {
  name: string
  color: string
}

type Dog = {
  name: string
  color: string
  breed: string
}

let animal : Animal = {
  name: "기린",
  color: "yellow",
}

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
}

animal = dog

// dog = animal => 이거 안됨... animal이 dog의 슈퍼타입

type Book = {
  name: string
  price: number
}

type ProgrammingBook = {
  name: string
  price: number
  skill: string
}

let book: Book
let progammingBook : ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs"
}

book = progammingBook
// progammingBook = book


// 초과 프로퍼티 검사
// 초기화 시 객체 리터럴을 사용하면 발동하는 타스 검사

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs"
}

let book3: Book = progammingBook // 이렇게 하면 초과 프로퍼티 검사 회피 가능

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 타스",
  price: 33000,
})
