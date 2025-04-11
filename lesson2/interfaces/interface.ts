//в назві інтерфейсу використовуємо I - IUser
//інтерфейс це модель даних
// інтерфейси і типи використовуємо при роботі з існуючими об'єктами, а класи тоді коли нам потрібно буде створювати нові об'єкти через New
interface IUser {
    name: string;
    age: number;
    status: boolean;

}

// інтерфейс можна розшити декларуючи його другий раз з новими полями
// interface IUser {
//     id: number;
// }

//               аналогічно type можна створити розширений інтерфейс на основі існуючого
//              бажано використовувати саме цей спосіб
interface IUser2 extends IUser {
    id: number;
}

let usersX: IUser[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 1, name: 'petya', age: 30, status: true},
    {id: 1, name: 'kolya', age: 29, status: true},
    {id: 1, name: 'olya', age: 28, status: false},
    {id: 1, name: 'max', age: 30, status: true},
    {id: 1, name: 'anya', age: 31, status: false},
    {id: 1, name: 'oleg', age: 28, status: false},
    {id: 1, name: 'andrey', age: 29, status: true},
    {id: 1, name: 'masha', age: 30, status: true},
    {id: 1, name: 'olya', age: 31, status: false},
    {id: 1, name: 'max', age: 31, status: true}
];
