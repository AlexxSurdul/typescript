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
