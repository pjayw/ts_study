// 접근 제어자(access modifier)
// public private protected

import { Agent } from "http"

class Employee {
  //필드
  // 생성자
  constructor(public name: string, 
    private age: number, 
    protected position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`)
  }
}

const employee = new Employee(
  "이정환",
  26,
  "developer"
)

employee.name = "홍길동"
// employee.age = 30
// employee.position = "디자이너"

// 요약
// public : 가장 기본적인 접근 제어자, 아무런 제한이 없음
// private : 가장 제한적인 접근 제어자, 파생 클래스에서도 접근 불가
// protected : 외부에서는 접근 제한, 파생 클래스 내부에서는 접근 가능
// 생성자의 매개변수 앞에 달아주는 것도 가능함, 이때는 필드 생략
