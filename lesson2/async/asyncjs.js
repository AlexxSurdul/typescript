"use strict";
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
    console.log(users[0].name);
});
async function foonbar() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json());
    return users;
}
