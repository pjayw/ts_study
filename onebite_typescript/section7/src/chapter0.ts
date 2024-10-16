// 제네릭

// 제네릭 함수 :  반환값의 타입을 원하는 타입으로 반환가능
function func<T>( value: T): T {
  return value
}

let num = func(10)
num.toFixed()

let bool = func(true)

let str = func('string')

let arr = func([1, 2, 3] as [number, number, number])
// 다른 방법
// let arr = func<[number, number, number]>([1, 2, 3])