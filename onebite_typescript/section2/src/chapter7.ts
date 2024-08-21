// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
// 쓰는 이유: 함수에서 undefined,null을 쓰면 오류

function func1(): string {
  return "hello"
}

function func2(): void {
  console.log("hello")
}

// never
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error()
}

let a: never // 아무것도 할당 불가, void는 undefined나 null도 담아짐