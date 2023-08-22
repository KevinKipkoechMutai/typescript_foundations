abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        return 10
    }
}

//const testPhoto = new TakePhoto("test", "test", 3)

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter, burst)
    }

    getSepia(): void {
        console.log("test")
    }
}

const testTwo = new Instagram("test", "test", 3)
testTwo.getReelTime()