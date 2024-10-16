// 프로미스 객체

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20) // 비동기 작업의 결과값
  }, 3000) // 3초간 기다림
})

promise.then((response) => {
  console.log(response * 10) // 200
})

promise.catch((err) => {
  if (typeof err === 'string') {
    console.error('실패', err)
  }
})

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id : number
  title : string
  content : string
}

function fetchPost (): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id : 1,
        title : '게시글 제목',
        content : '게시글 내용',
      })
    }, 3000)
  })
}

const postRequest = fetchPost()

postRequest.then((post) => {
  post.id
})