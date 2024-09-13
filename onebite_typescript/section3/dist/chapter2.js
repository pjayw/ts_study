// Unknown 타입 => 모든 집합의 슈퍼 타입
function unknownExam() {
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // let num: number = unknownVar
    // let str: string = unknownVar
    // let bool: boolean = unknownVar
}
// never 타입 => 모든 집합의 서브 타입
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // let never1 : never = num
    // let never2 : never = str
    // let never3 : never = bool
}
// void 타입
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;
    }
    let voidVar = undefined;
}
// any 타입 => 타입 계층도를 무시하는 치트키 타입
// 단, never는 예외
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar
}
export {};
