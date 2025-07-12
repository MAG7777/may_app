import { useLocalStorage } from "../hooks/useLocalStorage";

function Setting() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [language, setLanguage] = useLocalStorage("language", "ru");

  return (
    <div>
      <h1>Настроки</h1>
      <div>
        <h2>Theme:</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <h2>Язык:</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
      </div>

      <p>Current theme: {theme}</p>
      <p>Current language: {language}</p>
    </div>
  );
}

export default Setting;