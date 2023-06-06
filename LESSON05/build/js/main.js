"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Careful! TS sees no problem but a string is being returned
let nextVal = addOrConcat(2, 2, 'concat');
//20 as string not valid
// Double casting
20;
// The DOM 
const img = document.querySelector('img'); //not null
const myImg = document.getElementById('#img'); // html element
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
