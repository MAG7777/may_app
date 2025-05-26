import UserList from "../../components/User/UsersList";
import "./Home.css";
import { v4 as uuidv4 } from 'uuid';



const Home: React.FC = ()=>{

    return(
        <>
        <UserList />
            <h1>Home Pgae</h1>
        </>

    )
}

export default Home;