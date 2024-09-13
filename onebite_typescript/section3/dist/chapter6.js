// 타입 단언
let person = {}; // 직접 단언 type assertion
person.name = "이정환";
person.age = 27;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
// 아무 상황에서 쓰면 안되여
// 타입 단언의 규칙
// 값 as 단언의 형태로 단언식 작성
// 값의 타입이 A이고, 단언하는 타입이 B일 때
// A가 B의 슈퍼타입이거나 서브타입이어야 함
let num1 = 10;
let num2 = 20;
// let num3 = 10 as string => 얘는 슈퍼, 서브가 아니라 안됨
let num3 = 10; // 위의 거를 실행시키려면 이렇게
// const 단언
let num4 = 10; // const 선언과 같은 효과
let cat = {
    name: "야옹이",
    color: "yellow"
};
let post = {
    title: "게시글1",
    author: "이정환",
};
const len = post.author.length;
export {};
// !만 붙여주면 non, null이 아니라고 생각함
