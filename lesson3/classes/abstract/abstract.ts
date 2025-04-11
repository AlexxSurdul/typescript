//абстракт забороняє створення об'єкту певного типу

abstract class Animal {
    isAlive: boolean;

    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }

    abstract bark(): void;
}

// let animal = new Animal(true);

//але цей клас можна буде використовувати, як основу для чогось, для наслідування/розширення
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
