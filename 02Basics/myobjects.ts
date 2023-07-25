// const user = {
//     name: "kevin",
//     email: "kevin@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {
// }

// createUser({name: "kk", isPaid: false})

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

//type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {name: "", email: "", isActive: true}
} 

export {}