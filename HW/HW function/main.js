"use strict";
async function APIfetcher(input) {
    const res = await fetch(input);
    return await res.json();
}
// В async-функції або через .then()
APIfetcher('https://jsonplaceholder.typicode.com/todos/1')
    .then(apiUserData => {
    console.log(apiUserData);
});
