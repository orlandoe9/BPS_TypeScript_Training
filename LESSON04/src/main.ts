//Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name: string,
    //"?" makes properties optional
    active?: boolean,
    albums: (string | number)[]

}

type UserId = stringOrNumber

// Literal Types
//Cant reassign myName
let myName: 'Orlando'

let userName: 'Dave' | 'Orlando' | 'Amy'
// userName = 'Carlos' not valid
userName = 'Orlando'

// Functions
 const add = (a: number, b: number) => {
    return a + b
 }
 const logMsg = (message: any): void => {
    console.log(message)
 }

 logMsg('Hello World!')
 logMsg(add(2, 3))
//logMsg(add('a',3)) not valid

let substract = function (c: number, d: number): number {
    return c - d
}
 
type mathFuntion = (a: number, b: number) => number

let multiply: mathFuntion = function (c,d){
    return c * d
}

logMsg(multiply(2, 2))

// Optional parameters
const addAll = (a: number, b: number, c?: number):  number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b 
}

// not valid because 'c' is possibly 'undefined' 
/*const addAll = (a: number, b: number, c?: number):  number => {
    return a + b + c
} 
*/


// Default parameter value
const sumAll = (a: number = 10, b: number): number => {
    return a + b
}

logMsg(sumAll(undefined, 20))
//not valid
//logMsg(sumAll(a, 20)) because we have a '10' as a default value


// Rest Parameters (...nums always at the end of the function)
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4))

// Never type
//endless loopps, errors, etc.
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}