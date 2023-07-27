interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

const kevin: User = {
    dbId: 22,
    email: "email@gmail.com",
    userId: 2211,
    startTrial: () => {return "trial started"},
    getCoupon: (name: "kk", value: 5) => { return 10 }
}