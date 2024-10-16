// 조건부 타입

// 스트링이면 스트링이고 아니면 넘버
type A = number extends string? string : number

type ObjA = {
  a : number
}

type ObjB = {
  a: number
  b: number
}

// objB는 objA의 슈퍼타입이므로 참이 되어 number 타입이 됨
type B = ObjB extends ObjA ? number : string

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number? string : number

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

// 오버로딩
function removeSpaces<T>(text : T): T extends string ? string : undefined

function removeSpaces(text : any) {
  if (typeof text === 'string') {
    return text.replaceAll(" ","")
  } else {
    return undefined
  }
}
// replaceAll 첫 번째 인수에 해당하는 모든 것을 두 번째로 바꿈

let result = removeSpaces("hi im winterlood")
result.toUpperCase()

let result2 = removeSpaces(undefined)