// let a: number = 123;
// let b: boolean = true;
// let c: string = 'okten';
//
// // function foo(arg1: number, arg2: number): number {
// //     return arg1 + arg2;
// // }
// //
// // foo(1,'1asdsa');
//
// // let arr: any[] = [];
// // arr.push(1);
// // arr.push('1');
// // arr.push(true);
//


class User {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {
        console.log('asdasd');
    }

}

let user = new User('asd', 123, false);


let users: User[] = [
    new User('adwqeqw', 123, true)

];

console.log(users);
