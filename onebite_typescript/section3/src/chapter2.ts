// Unknown 타입 => 모든 집합의 슈퍼 타입

function unknownExam() {
  let a : unknown = 1
  let b : unknown = "hello"
  let c : unknown = true
  let d : unknown = null
  let e : unknown = undefined

  let unknownVar: unknown

  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}

// never 타입 => 모든 집합의 서브 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num : number = neverFunc()
  let str : string = neverFunc()
  let bool : boolean = neverFunc()

  // let never1 : never = num
  // let never2 : never = str
  // let never3 : never = bool
}

// void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi")
    return undefined
  }

  let voidVar: void = undefined
}

// any 타입 => 타입 계층도를 무시하는 치트키 타입
// 단, never는 예외

function anyExam() {
  let unknownVar: unknown
  let anyVar: any
  let undefinedVar: undefined
  let neverVar: never

  anyVar = unknownVar

  undefinedVar = anyVar

  // neverVar = anyVar
}