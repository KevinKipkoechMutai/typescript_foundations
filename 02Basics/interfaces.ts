interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const kevin: Admin = {
    dbId: 22,
    email: "email@gmail.com",
    role: "admin",
    userId: 2211,
    githubToken: 'github',
    startTrial: () => {return "trial started"},
    getCoupon: (couponName: "kk", value: 5) => { return 10 }
}

