// 템플릿 리터럴 타입

type Color = 'red' | 'black' | 'green'

type Animal = 'dog' | 'cat' | 'chicken'

// 이렇게 하면 조합가능...
type ColoredAnimal = `${Color}-${Animal}`