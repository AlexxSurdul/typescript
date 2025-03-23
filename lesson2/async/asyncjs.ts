interface IUser {
    id: number;
    name: string
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users: IUser[]) => {
        console.log(users[0].name);
    });

async function foobar(): Promise<IUser[]> {

    let users: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value: Response) => value.json());

    return users;

}
