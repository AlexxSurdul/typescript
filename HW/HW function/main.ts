// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь


async function APIfetcher<T>(input: string): Promise<T> {
    const res = await fetch(input);
    return await res.json();
}

type APIUserType = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
};

APIfetcher<APIUserType>('https://jsonplaceholder.typicode.com/todos/1')
    .then(apiUserData => {
        console.log(apiUserData);
    });
