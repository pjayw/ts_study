// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "박지원",
  nickname: "jay",
  birth: "1998.01.31",
  bio: "안녕하세요",
  location: "부산시",
}

// 인덱스 시그니처
type CountryCodes = {
  [key : string] : string;
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
}

type CountryNumberCodes = {
  [key: string] : number;
  Korea: number; // 위 인덱스 시그니처와 다르면 오류
}

let countryNumberCodes: CountryNumberCodes = {
  Korea : 410,
  UnitedState : 840,
  UnitedKingdom : 826,
}