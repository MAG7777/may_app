import { type FormEvent } from "react";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
import useForm from "../../hooks/useForm";

// Типизация формы авторизации
type AuthFormData = {
  email: string;
  password: string;
};
type AuthRegFormData = {
  userName: string;
  email: string;
  password: string;
};
function App() {
  const loginData = useForm<AuthFormData>({ email: "", password: "" });
  const registerData = useForm<AuthRegFormData>({ email: "", password: "", userName: "" });




  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", loginData.formData);
  };

  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", registerData.formData);
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginForm
        handleChange={loginData.handleChange}
        handleSubmit={handleLoginSubmit}
        formData={loginData.formData}
      />
      <h1>Регистрация</h1>
      <RegisterForm
        handleChange={registerData.handleChange}
        handleSubmit={handleRegisterSubmit}
        registerData={registerData.formData}


      />
    </div>
  );
}

export default App;
