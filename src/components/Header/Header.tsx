import { useUserContext } from "../../Contexts/UserContext";
import UserInfo from "../UserInfo";
function Header() {
    const user = useUserContext()

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <UserInfo />
        </div>

    )

}

export default Header;