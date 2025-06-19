import { useUserContext } from "../Contexts/UserContext";


function UserDetails() {
    const user = useUserContext()

    return (
        <div>
            <h3>User details</h3>
            <p>Name:{user?.name} </p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default UserDetails;