"use strict";
// class UserGen<T1> {
//     id: T1;
//     name: string;
//
//
//     constructor(id: T1, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1, 'asda');
// let userGen2 = new UserGen<string>('asdq^%#%E', 'asdsa');
// let userGen = new UserGen<{ x: number; }>({x: 100500}, 'utryf');
//
// // let arr: Array<string> = [11, 22, 33];
//
//
let item = localStorage.getItem('user');
if (item) {
    let user = JSON.parse(item);
}
// кусок коду, який дозволить працювати з локалсторедж і типізувати об'єкти
function foobar(key) {
    let objJSON = localStorage.getItem(key);
    if (objJSON) {
        return JSON.parse(objJSON);
    }
    return {};
}
let iDog = foobar('dog');
let iUserLS = foobar('user');
