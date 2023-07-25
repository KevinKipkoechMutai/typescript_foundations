function addTwo(num: number) {
    //num.toUpperCase() => error (string method)
    return num + 1
}

addTwo(5)

function getUpperCase(val: string) {
    return val.toLocaleUpperCase()
}

getUpperCase("kevin")


function signUpUser(name: string, email: string, password: string, isPaid: boolean) {

}

signUpUser("Kevin", "kevin@gmail.com", "1234", true)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}

loginUser("kk", "kk@gmail.com")

// type safety on function returns
function addThree(num: number): number {
    return num + 3
}

function getValue(myVal: number) {
    return myVal > 5 ? true : "200 OK"
}

const heroes = ["thor", "hulk", "spiderman", "CA", "PQ", "rocket"]

heroes.map((hero, i): string => {
    return `hero-${i}: ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg)
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

export {}