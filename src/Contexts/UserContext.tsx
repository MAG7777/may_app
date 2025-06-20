import { createContext, useContext } from "react";
export type User = {
    id?: number;
    name: string;
    email: string;
};

type UserContextType = {
    user: User;
    updateUser: (newUser: User) => void;
};
export const UserContext = createContext<UserContextType>({
    user: { name: "", email: "" },
    updateUser: () => { }
});

export function useUserContext() {
    const user = useContext(UserContext);

    if (!user) {
        throw new Error("Info did not receve")
    }

    return user;
}