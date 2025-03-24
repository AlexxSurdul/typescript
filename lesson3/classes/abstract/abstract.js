"use strict";
class Animal {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
}
// let animal = new Animal(true);
class Bird extends Animal {
    constructor(isAlive, wings) {
        super(isAlive);
        this.wings = wings;
    }
    bark() {
        console.log('chik chiriki');
    }
}
