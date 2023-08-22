const scores: Array<number> = [1, 2, 3]
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number | string {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "b", type: 3})

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}
function getMoreSearchProducts<T,>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    return {val1, val2}
}

anotherFunction(3, {connection: "a", username: "b", password: "c"})

interface Quiz {
    name: string,
    type: string
}

interface course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}