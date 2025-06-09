import { useEffect, useState } from "react";

type Post = {
    id: number,
    title: string,
    body: string,
}

export function DataFetch() {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const result = await response.json();
                setData(result);

            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error("Unknown error", error);
                }

            } finally {
                setLoading(false)
            }
        };
        fetchData();

    }, [])
    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return <>
        <ul>
            {
                data.map((post) =>
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>)
            }
        </ul>
    </>
}