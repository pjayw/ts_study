// 타입스크립트의 클래스

const employee = {
  name : '박지원',
  age : 27,
  position : 'developer',
  work () {
    console.log('일함')
  }
}

class Employee {
  //필드
  // 이니셜라이저 해결법 : 선택적 프로퍼티 or 생성자 만들기 or 기본값 할당
  name : string
  age : number
  position : string

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name
    this.age = age
    this.position = position
  }

  // 메서드
  work() {
    console.log('일함')
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber : number

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position) // 상속 받은 값
    this.officeNumber = officeNumber
  }
}

const employeeB = new Employee("정현수", 38, "택배원")
console.log(employeeB)

const employeeC : Employee =  {
  name : "김욱진", 
  age : 32, 
  position : "노가다",
  work() {}
}