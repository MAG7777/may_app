import { createContext, useContext } from "react";
type User = {
    id?:number,
    name:string,
    email:string
}
export const UserContext = createContext<User|null>(null);

export function useUserContext(){
    const user = useContext(UserContext);

    if(!user){
        throw new Error("Info did not receve")
    }

    return user;
}