// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const squareCalc:(a: number, b: number)=> number  = (a: number, b: number): number => a * b;
console.log(squareCalc(15, 20));


console.log('----------------------------')
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleCalc = (r: number): number => Math.PI * r * r;

console.log(circleCalc(25));

console.log('----------------------------')
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderCalc = (h: number, r: number): number => 2 * Math.PI * r * (h + r);

console.log(cylinderCalc(25, 10));

console.log('----------------------------')
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrayPrinter = (arr) => arr.forEach(item => console.log(item));

const arrayPrint = (arr: any[]): void => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayPrint([12, 'sdgdgcv', 0, NaN, false, -35]);

console.log('----------------------------')
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const pCreate = (p: string): void => document.write(`<p>${p}</p>`);

pCreate('lorem ipsum')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulCreate = (l: string): void => {
    document.write(`
                        <ul>
                            <li>${l}</li>
                            <li>${l}</li>
                            <li>${l}</li>
                        </ul>
                        `)
};

ulCreate('lorem ipsum')

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const liCreate = (l: string, n: number): void => {
    document.write('<ul>')

    for (let i: number = 0; i < n; i++) {

        document.write(`<li>${l}</li>`);

    }

    document.write('</ul>')
};

liCreate('lorem ipsum', 5)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const arrayPrimit = (arr: any[]): void => {

    document.write('<ul>')
    for (let i: number = 0; i < arr.length; i++) {
        let argument: any = arr[i];
        if (typeof argument === 'number' ||
            typeof argument === 'string' ||
            typeof argument === 'boolean' ||
            typeof argument === 'bigint'
        ) {
            document.write(`<li>${argument}</li>`)
        }
    }
    document.write('</ul>')
};

arrayPrimit([12, null, 'sdgdgcv', 0, NaN, false, undefined, 0.256, 11665555646466666662625555555556299n, {key: 12}, [1, 2, 3]]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


const printArray = (array: any[]) => {
    for (const item of array) {
        document.write('<div>');
        for (const itemKey in item) {
            document.write(`<p>${itemKey}: ${item[itemKey]}</p>`)
        }
        document.write('</div>');
    }
};

const users3: Iusers1[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 27, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
printArray(users3);


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

const compareNumbers = (arr: number[]): number => {
    let min = arr[0];
    for (let number of arr) {
        if (number < min) {
            min = number;
        }
    }
    return min;
};

console.log(compareNumbers([12, 25, -2, 0, 13.5, -12.6]));

console.log('----------------------------')

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr: number[]): number => {
    let sum: number = 0;
    for (const num of arr) {
        sum = sum + num;
    }
    return sum;
};

console.log(sum([10.5, 9.5, -2]));

console.log('----------------------------')

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr: number[], index1: number, index2: number) => {

    let numTemp: number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numTemp;
    console.log(arr);
};

swap([11, 22, 33, 44, 55], 4, 1);

console.log('----------------------------')

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


const exchange = (sumUAH: number, currencyValues: IcurrencyValues[], exchangeCurrency: string) => {

    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            console.log(sumUAH / currencyValue.value);
        }
    }
};

exchange(10000,
    [{currency: 'UAH', value: 1}, {currency: 'USD', value: 25}, {currency: 'EUR', value: 42}, {
        currency: 'GBP',
        value: 47
    }], 'GBP'); // => 400