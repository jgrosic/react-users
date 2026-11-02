import {useEffect, useState} from "react";
import {delay} from "../util.tsx";

interface User {
    id: number,
    name: string,
}

function Users() {

    // const result: Array<User> = new Array<User>( {id: 5}, {id: 6});
    // const result: Array<User> = await getUsers();

    const result: { users: User[]; loading: boolean } = useUsers();

    if (result.loading)
        return (<div>Loading...</div>);

    return (
        <div>
            {result.users.map(u =>
                (
                    <li key={u.id}>
                        {u.id}, {u.name}
                    </li>
                )
            )}
        </div>
    )

}

async function getUsers(abort: AbortController): Promise<User[]> {
    await delay(2);
    let response = (await fetch("https://jsonplaceholder.typicode.com/users", {signal: abort.signal}));
    return response.json();
}

function useUsers() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

            const abort = new AbortController();
            
            async function loadUsers() {
                try {
                    const data = await getUsers(abort);
                    setUsers(data);
                } catch (err) {

                    if (err instanceof DOMException && err.name === "AbortError") {
                        return; // expected cancellation
                    }
                    setError("Something went wrong");
                } finally {
                    setLoading(false);
                }
            }

            void loadUsers();
            return () => abort.abort(); // kills the fetch on unmount
        },
        []);

    return {users, loading, error};
}

export default Users;