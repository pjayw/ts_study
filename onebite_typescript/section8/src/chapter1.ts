// 인덱스드 액세스 타입 => 인덱스를 이용해 접근한다.
// 인덱스에는 타입만 명시할 수 있다.
// 인덱스에는 존재하는 타입만 명시할 수 있다.
// 아래에서 id만 뽑고싶으면 ['author']['id'] 하면됨

// 객체
interface Post {
  title : string
  content : string
  author : {
    id : number
    name : string
    age : number
    location : string
  }
}


// 아래처럼 하면 Post 의 author 부분만 쏙 빼서 정의됨
// 원본 author 가 수정되도 같이 바뀌어서 개편함
function printAuthorInfoA(author : Post['author']) {
  console.log(`${author.name}-${author.id}`)
}

const postA : Post = {
  title : '게시글 제목',
  content : '게시글 본문',
  author : {
    id : 1,
    name : "신광훈",
    age : 27,
    location : '부산',
  }
}

// 배열
type PostList =  {
  title : string
  content : string
  author : {
    id : number
    name : string
    age : number
    location : string
  }
}[]


// 아래처럼 하면 Post 의 author 부분만 쏙 빼서 정의됨
// 원본 author 가 수정되도 같이 바뀌어서 개편함
function printAuthorInfo(author : PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`)
}

const post : PostList[number] = {
  title : '게시글 제목',
  content : '게시글 본문',
  author : {
    id : 1,
    name : "신광훈",
    age : 27,
    location : '부산',
  }
}

// 튜플

type Tup = [number, string, boolean]

type Tup0 = Tup[0]

type Tup1 = Tup[1]

type Tup2 = Tup[2]

// type Tup3 = Tup[3]

type TupNum = Tup[number]