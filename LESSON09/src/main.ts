// Utility Types

// Partial
interface Gamer{
    playerId: string,
    game: string,
    releaseYear: number,
    isXbox?: boolean

}

const updateGamer = (assign: Gamer, propsToUpdate: Partial<Gamer>): Gamer => {
    return {...assign, ...propsToUpdate}
}

const assign1: Gamer = {
    playerId: "orli720",
    game: "FIFA",
    releaseYear: 0
}

//overwritting property
console.log(updateGamer(assign1, {releaseYear: 2020}))
const assignGamer: Gamer = updateGamer(assign1, {releaseYear: 2020})

//Required and Readonly

//All properties are required now.
const recordGamer = (assign: Required<Gamer>): Gamer => {
    return assign
}
//Won't work
//const assignVerified: Readonly<Gamer> = { ...assignGamer, verified: true }

const assignVerified: Readonly<Gamer> = { ...assignGamer, isXbox: true }

// Record 
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}

// Pick and Omit 

type AssignResult = Pick<Gamer, "playerId" | "releaseYear">

const score: AssignResult= {
    playerId: "k123",
    releaseYear: 2008,
}

type AssignPreview = Omit<Gamer, "releaseYear" | "isXbox">

const preview: AssignPreview = {
    playerId: "k123",
    game: "FIFA"
}

// Exclude and Extract 

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable 

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// Return Type
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters 

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited and Promises

interface player {
    userName: string,
    YOB: number,
    email: string
}

const fetchPlayers = async (): Promise<player[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchPlayers>>

fetchPlayers().then(fetchPlayers => console.log(fetchPlayers))