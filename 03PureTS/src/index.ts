class User {
    // public email: string
    // public name: string

    protected _courseCount = 1

    private readonly city: string = "Nairobi"
    constructor(
        public email: string, 
        public name: string, 
        //private userId: string
        ){
        // this.email = email
        // this.name = name
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        this.deleteToken()
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Shouldn't be more than 1")
        }
        this._courseCount = courseNum
    }
}

const kev = new User("kk@gmail.com", "kevin")
//console.log(kev.city)
// kev.city = "Kericho"
//kev.city

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}