import Setting from "../../components/Settings";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const App = () => {
  const [name, handleSetName, handleRemoveName] = useLocalStorage(
    "name",
    "Guest"
  );

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => handleSetName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleRemoveName}>Clear name</button>
      <Setting />
    </div>
  );
};

export default App;