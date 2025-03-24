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
// // let arr: number[] = [];
// // arr.push(1);
// // arr.push(2);
// // arr.push(3);
//
// let arr: any[] = [];
// // arr.push(1);
// // arr.push('1');
// // arr.push(true);
//

//можна створити клас для типізації масива об'єктів, але поля потрібно буде ініціалізувати через конструктор (Alt+Insert)
class Consumer {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
//функція greeting також є необов'язковою, якщо ми визначаємо її класом
    greeting() {
        console.log('asdasd');
    }

}

let consumer = new Consumer('asd', 123, false);


let consumers: Consumer[] = [
    new Consumer('adwqeqw', 123, true)

];

console.log(consumers);
