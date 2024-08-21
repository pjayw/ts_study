// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 타입 스크립트의 타입 검사를 다 통과하는 치트키
// 타입 스크립트의 이점을 버리는 것이므로 웬만하면 쓰지말자

let anyVar: any = 10

let num: number = 10
num = anyVar

// unknown
// any와 달리 다른 타입에 할당이 불가능
// 특정변수의 타입을 확실히 모를 때는 좀 더 안전한 unknown을 쓰자

let unknownVar: unknown

unknownVar = "";
unknownVar = 1
unknownVar = () => {}

if (typeof unknownVar === "number") {
  num = unknownVar
}