"use strict";
// Literal Types
//Cant reassign myName
let myName;
let userName;
// userName = 'Carlos' not valid
userName = 'Orlando';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World!');
logMsg(add(2, 3));
//logMsg(add('a',3)) not valid
let substract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// not valid because 'c' is possibly 'undefined' 
/*const addAll = (a: number, b: number, c?: number):  number => {
    return a + b + c
}
*/
// Default parameter value
const sumAll = (a = 10, b) => {
    return a + b;
};
logMsg(sumAll(undefined, 20));
//not valid
//logMsg(sumAll(a, 20)) because we have a '10' as a default value
// Rest Parameters (...nums always at the end of the function)
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// Never type
//endless loopps, errors, etc.
const createError = (errMsg) => {
    throw new Error(errMsg);
};
