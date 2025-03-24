"use strict";
class BirdClass {
    constructor(isAlive, wings, id) {
        this._isAlive = isAlive;
        this._wings = wings;
        this._id = id;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    get wings() {
        return this._wings;
    }
    set wings(value) {
        this._wings = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    sound() {
    }
}
