import { useState, type FormEvent, type ChangeEvent } from "react";
import useApi from "../hooks/useApi";

// Тип данных пользователя
type User = {
  id?: number;
  name: string;
  hasCar: boolean;
};

const AddUser: React.FC = () => {
  const [formState, setFormState] = useState<{ name: string; hasCar: boolean }>({
    name: "",
    hasCar: false,
  });

  const { loading, error, post } = useApi<User>("https://jsonplaceholder.typicode.com");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await post("users", formState);
      alert("User added successfully");
      setFormState({ name: "", hasCar: false });
    } catch {
      alert("Try again later");
    }
  };

  return (
    <div>
      <h2>Add user</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="hasCar">Availability of a car:</label>
          <input
            type="checkbox"
            id="hasCar"
            name="hasCar"
            checked={formState.hasCar}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Add user"}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default AddUser;
