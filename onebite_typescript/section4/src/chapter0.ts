// 함수 타입 정의
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b
}

// 화살표 함수의 정의

const add = (a: number, b: number) => {
  a + b
}

// 함수의 매개변수

function introduce(name = "장익수",age: number, tall: number) {
  console.log(`name : ${name}`)
  console.log(`age : ${age}`)
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`)
  }
}

introduce("정리환", 27, 175)

function getSum(...rest: number[]) {
  let sum = 0
  rest.forEach((it) => (sum += it))
  return console.log(sum)
}

getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5)
