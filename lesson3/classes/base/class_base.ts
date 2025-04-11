// інтерфейси і типи використовуємо при роботі з існуючими об'єктами, а класи тоді коли нам потрібно буде створювати нові об'єкти через New

class User {
    // private name: string;
    // private age: number;
    // private status: boolean;


    constructor(private _name: string, private _age: number, private _status: boolean) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }

    public greeting() {
        console.log('hello okten');
    }
//для доступу до приватних полів потрібно згенерувати гетери і сетери через alt+insert (alt+fn+insert)

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}

let user = new User('asdsa', 123, true);

console.log(user.name);
user.name = 'asufdhgsaf';


//класи в ТС також можуть екстендити інші класи як в ДЖС
class User2 extends User {
    // id: number;

    constructor(name: string, age: number, status: boolean, private _id: number) {
        super(name, age, status);
        this._id = _id;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}

let user2 = new User2('asd', 123, true, 1);
console.log(user2.name);
console.log(user2.id);


