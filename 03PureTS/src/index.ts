class User {
    readonly city: string = "Nairobi"
    constructor(public email: string, public name: string, private userId: string){
    }
}

const kev = new User("kk@gmail.com", "kevin", "a234")
//console.log(kev.city)