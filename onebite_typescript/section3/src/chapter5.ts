// 타입 추론
// 초기값을 기준으로 타입을 추론해줌
// 함수의 매개변수는 타입 추론 x

let a = 10
let b = "hello"
let c = {
  id: 1,
  name: "박지원",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
}

let {id, name, profile } = c  

let [ one, two, three ] = [1, "hello", true]

function func(message="hello") {
  return "hello"
}

let d: any
d = 10
d.toFixed()

d = "hello"
d.toUpperCase()
// d.toFixed()

// const는 추론 안됨

let arr = [1, "string"]

 