"use strict";
// інтерфейси і типи використовуємо при роботі з існуючими об'єктами, а класи тоді коли нам потрібно буде створювати нові об'єкти через New
class User {
    // private name: string;
    // private age: number;
    // private status: boolean;
    constructor(_name, _age, _status) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }
    greeting() {
        console.log('hello okten');
    }
    //для доступу до приватних полів потрібно згенерувати гетери і сетери через alt+insert (alt+fn+insert)
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
let user = new User('asdsa', 123, true);
console.log(user.name);
user.name = 'asufdhgsaf';
//класи в ТС також можуть екстендити інші класи як в ДЖС
class User2 extends User {
    // id: number;
    constructor(name, age, status, _id) {
        super(name, age, status);
        this._id = _id;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let user2 = new User2('asd', 123, true, 1);
console.log(user2.name);
console.log(user2.id);
