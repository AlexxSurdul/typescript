type AnimalType = {
    isAlive: boolean;
    sound: () => void

}

class Horse implements AnimalType{
    isAlive: boolean;

    sound(): void {
    }


    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }
}
