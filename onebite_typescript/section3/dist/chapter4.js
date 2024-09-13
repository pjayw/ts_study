// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입, 교집합 타입 존재
// 1. 합집합 - Union 타입
let a;
a = "alexis" + 10;
a = true;
let arr = [1, "Hello", true];
let union1 = {
    name: "돌돌이",
    color: "yellow",
};
let union2 = {
    name: "산체스",
    language: "라틴어",
};
let union3 = {
    name: "강백호",
    color: "yellow",
    language: "히브리어"
};
// 2. 교집합 타입 - Intersection 타입
let variable;
let intersection1 = {
    name: "냠돌이",
    color: "black",
    language: "중국어",
};
export {};
