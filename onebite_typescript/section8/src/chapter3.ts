// 맵드 타입
// 거의 비슷한 타입을 다시 만들어야할 때 사용

interface User {
  id : number
  name : string
  age : number
}

// 맵드 타입은 선택적 프로퍼티 지정이 ㅈㄴ쉬움
type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key]
}

// keyof 를 사용해서 지정하는게 더 편함 
type BooleanUser = {
  [key in keyof User]: boolean
}

// readonly 적용하기
type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser():User {
  return {
    id : 1,
    name : '장두팔',
    age : 27,
  }
}

// 한 명의 유저 정보를 수집하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  age : 26,
})