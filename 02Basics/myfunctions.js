"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase() => error (string method)
    return num + 1;
}
addTwo(5);
function getUpperCase(val) {
    return val.toLocaleUpperCase();
}
getUpperCase("kevin");
function signUpUser(name, email, password, isPaid) {
}
signUpUser("Kevin", "kevin@gmail.com", "1234", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("kk", "kk@gmail.com");
// type safety on function returns
function addThree(num) {
    return num + 3;
}
function getValue(myVal) {
    return myVal > 5 ? true : "200 OK";
}
var heroes = ["thor", "hulk", "spiderman", "CA", "PQ", "rocket"];
heroes.map(function (hero, i) {
    return "hero-".concat(i, ": ").concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
