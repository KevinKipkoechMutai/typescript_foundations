let score: number | string = 33

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitesh: User | Admin = { name: "hitesh", id: 334 }
hitesh = { username: "hc", id: 334 }

function getDbId(id: number | string) {
   // console.log(`DB id: ${id}`)
   typeof id === "string" ? id.toLowerCase() : id
}

const data: (string | number | boolean)[] = [1, 2, "3", true]

let seatAllotment: "aisle" | "middle" | "window"

export {}