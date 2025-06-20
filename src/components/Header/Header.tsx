import { useUserContext } from "../../Contexts/UserContext";
import UserInfo from "../UserInfo";
function Header() {
    const {user, updateUser} = useUserContext()

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <button onClick={()=>updateUser({name:"test",email:"tes@mail.com"})}>Update user</button>
            <UserInfo />
        </div>

    )

}

export default Header;