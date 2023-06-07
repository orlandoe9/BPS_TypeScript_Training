"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateGamer = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    playerId: "orli720",
    game: "FIFA",
    releaseYear: 0
};
//overwritting property
console.log(updateGamer(assign1, { releaseYear: 2020 }));
const assignGamer = updateGamer(assign1, { releaseYear: 2020 });
//Required and Readonly
//All properties are required now.
const recordGamer = (assign) => {
    return assign;
};
//Won't work
//const assignVerified: Readonly<Gamer> = { ...assignGamer, verified: true }
const assignVerified = Object.assign(Object.assign({}, assignGamer), { isXbox: true });
// Record 
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    playerId: "k123",
    releaseYear: 2008,
};
const preview = {
    playerId: "k123",
    game: "FIFA"
};
// Return Type
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchPlayers().then(fetchPlayers => console.log(fetchPlayers));
