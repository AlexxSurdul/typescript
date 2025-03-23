abstract class Animal {
    isAlive: boolean;

    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }

    abstract bark(): void;
}

// let animal = new Animal(true);

class Bird extends Animal {
    wings: boolean;

    constructor(isAlive: boolean, wings: boolean) {
        super(isAlive);
        this.wings = wings;
    }

    bark(): void {
        console.log('chik chiriki');
    }

}
