interface IAnimal {
    isAlive: boolean;
    sound: () => void
}

interface X extends IAnimal {
    id: number;
}

class BirdClass implements IAnimal {
    private _isAlive: boolean;
    private _wings: boolean;
    private _id: number;


    constructor(isAlive: boolean, wings: boolean, id: number) {
        this._isAlive = isAlive;
        this._wings = wings;
        this._id = id;
    }


    get isAlive(): boolean {
        return this._isAlive;
    }

    set isAlive(value: boolean) {
        this._isAlive = value;
    }

    get wings(): boolean {
        return this._wings;
    }

    set wings(value: boolean) {
        this._wings = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    sound(): void {
    }

}



