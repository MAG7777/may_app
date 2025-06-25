import type { ChangeEvent, FormEvent } from "react";

type RegisterFormData = {
    userName: string;
    email: string;
    password: string;
};

type RegisterFormProps = {
    registerData: RegisterFormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void; // 👈 ИЗМЕНЕНО
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const RegisterForm = (
    { registerData,
        handleChange,
        handleSubmit
    }: RegisterFormProps
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input
                    type="text"
                    name="userName" // 👈 ОБЯЗАТЕЛЬНО
                    value={registerData.userName || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={registerData.email || ""}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={registerData.password || ""}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Registration</button>
        </form>
    );
};