// Pick<T, K>
// 객체 타입으로 특정 프로퍼티만 골라내는 타입

interface Post {
  title : string
  tags : string[]
  content : string
  thumnailURL?: string
}

// pick 타입 직접 구현

type Pick<T, K extends keyof T> = {
  [key in K]: T[key]
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title : '옛날글',
  content : '옛날 컨텐츠',
}

// Omit<T,K>
// 객체 타입으로부터 특정 프로퍼티를 제거

// omit 타입 직접 구현

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T,K>>
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | thumbnailURL' >
// 결국 포스트에서 세 가지 프로퍼티를 빼온것과 같음


const noTitlePost : Omit<Post, 'title'>  = {
  content: '',
  tags: [],
  thumnailURL: '',
}

// Record<K, V>

// record 타입 직접 구현

type Record<K extends keyof any, V> = {
  [key in K]: V
}

type Thumbnail = Record<
'large' | 'medium' | 'small' | 'watch', 
{ url : string; size : number }
>