// object
let user: {
  id?: number,
  name: string,
} = {
  id: 1,
  name: "박지원"
}

let config: {
  readonly apiKey: string // 수정되면 안되는 것
} = {
  apiKey : "MY API KEY"
}

// config.apiKey = "hacked"