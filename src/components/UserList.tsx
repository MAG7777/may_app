import { useEffect } from "react";
import useApi from "../hooks/useApi";

// Define type for user
type User = {
  id: number;
  name: string;
  hasCar: boolean;
};

const UserList = () => {
  const { data, loading, error, get } = useApi<User[]>("https://jsonplaceholder.typicode.com");

  useEffect(() => {
    get("users");
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data && data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.hasCar ? "Has Car" : "No Car"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UserList;
