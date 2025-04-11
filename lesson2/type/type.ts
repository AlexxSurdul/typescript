// інтерфейси і типи використовуємо при роботі з існуючими об'єктами, а класи тоді коли нам потрібно буде створювати нові об'єкти через New


// type MyString = string;             //можна задати псевдонім для типів
// let s: MyString = 'okten is cool';
//
// type PrimitiveTypes = string | number | boolean; //можна задати кілька типів для одного псевдоніму
// let x: PrimitiveTypes = true;
//
// type Falsy = 0 | false | '' | undefined | null  //наприклад можна одразу задати псевдонім для всіх фолсі значень
//
// // let f: Falsy = true;


// type UserType = {           //в назві типу використовуємо слово Type
//     name: string;
//     age: number;
//     status: boolean
//     extra?: string   //можна задати ще одне не обов'язкове поле позначивши його через "елвіса" - ?:
//     foo:(str: string) => string; //функція яка приймає стрінгу і повертає стрінгу
// }
//                               --Type model intersection--
// type UserType2 = UserType & { id: number };  //ми можемо розширити type додатковими полями, якщо не можемо чи не хочемо міняти первинний type
//
// let users: UserType2[] = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 1, name: 'petya', age: 30, status: true},
//     {id: 1, name: 'kolya', age: 29, status: true},
//     {id: 1, name: 'olya', age: 28, status: false},
//     {id: 1, name: 'max', age: 30, status: true},
//     {id: 1, name: 'anya', age: 31, status: false},
//     {id: 1, name: 'oleg', age: 28, status: false},
//     {id: 1, name: 'andrey', age: 29, status: true},
//     {id: 1, name: 'masha', age: 30, status: true},
//     {id: 1, name: 'olya', age: 31, status: false},
//     {id: 1, name: 'max', age: 31, status: true}
// ];
//
// type MyFn = (a: number) => void


