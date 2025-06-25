import type { ChangeEvent, FormEvent } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  formData: LoginFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void; // 👈 ИЗМЕНЕНО
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({ formData, handleChange, handleSubmit }: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};