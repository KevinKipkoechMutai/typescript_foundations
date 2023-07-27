// // const user = {
// //     name: "kevin",
// //     email: "kevin@gmail.com",
// //     isActive: true
// // }

// // function createUser({name: string, isPaid: boolean}) {
// // }

// // createUser({name: "kk", isPaid: false})

// // function createCourse():{name: string, price: number}{
// //     return {name: "reactjs", price: 399}
// // }

// //type aliases
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// } 

type User = {
    readonly _id: string //readonly for immutability
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@gmail.com",
    isActive: false
}

// combining types
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "i@gmail.com"
//myUser._id = "" //throws error

export {}