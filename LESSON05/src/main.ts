// Assertions
type One = string
type Two = string
type Three = 'hello world'

//convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number |
string => {
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2, 'concat') as string

// Careful! TS sees no problem but a string is being returned
let nextVal: number = addOrConcat(2,2, 'concat') as number

//20 as string not valid
// Double casting
(20 as unknown) as string

// The DOM 
const img = document.querySelector('img')! //not null
const myImg = document.getElementById('#img') as HTMLImageElement // html element
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src