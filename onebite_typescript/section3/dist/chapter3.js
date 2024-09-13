// 기본 타입 간의 호환성
let num1 = 10;
let num2 = 10;
num1 = num2;
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
animal = dog;
let book;
let progammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs"
};
book = progammingBook;
// progammingBook = book
// 초과 프로퍼티 검사
// 초기화 시 객체 리터럴을 사용하면 발동하는 타스 검사
let book2 = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs"
};
let book3 = progammingBook; // 이렇게 하면 초과 프로퍼티 검사 회피 가능
function func(book) { }
func({
    name: "한 입 크기로 잘라먹는 타스",
    price: 33000,
});
export {};
