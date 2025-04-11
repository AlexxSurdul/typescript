"use strict";
//абстракт забороняє створення об'єкту певного типу
class Animal {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
}
// let animal = new Animal(true);
//але цей клас можна буде використовувати, як основу для чогось, для наслідування/розширення
class Bird extends Animal {
    constructor(isAlive, wings) {
        super(isAlive);
        this.wings = wings;
    }
    bark() {
        console.log('chik chiriki');
    }
}
