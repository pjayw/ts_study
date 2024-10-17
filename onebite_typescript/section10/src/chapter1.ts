// 맵드 타입 기반의 유틸리티 타입들

// Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적으로 변경

interface Post {
  title : string
  tags : string[]
  content : string
  thumnailURL?: string
}

// partial 타입 직접 구현
type Partial<T> = {
  [key in keyof T]? : T[key]
}

const draft: Partial<Post> = {
  title : '제목 나중에 짓자',
  content : '초안...',
}

// Required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수로 변경

// required 타입 직접 구현

type Required<T> = {
  [key in keyof T]-? : T[key]
}

const withThumnailPost : Required<Post> = {
  title : '한입 타스',
  tags: ['ts'],
  content : '',
  thumnailURL: 'https:// ...',
}

// Readonly<T>
// 특정 객체 타입에서 모든 프로퍼티를 읽기 전용으로
// 수정이 불가능

// readonly 타입 직접 구현
type Readonly<T> = {
  readonly [key in keyof T] : T[key]
}

const readonlyPost : Readonly<Post> = {
  title : '보호된 게시글',
  tags: [],
  content: "",
}

