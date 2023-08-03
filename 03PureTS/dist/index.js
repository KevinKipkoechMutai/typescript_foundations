"use strict";
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Nairobi";
    }
}
const kev = new User("kk@gmail.com", "kevin", "a234");
//console.log(kev.city)
