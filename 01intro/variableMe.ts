let greetings: string = "Hello Kevin"
//list out string/number methods

let userId: number = 33456

let isLoggedIn: boolean = false

//types inference => any
let anyString

function getAnyStr() {
    return "String"
}

anyString = getAnyStr() //anyString is assigned to type any [Not Good]



export {}