import Header from '../Header/Header';
import './App.css';
import { UserContext } from '../../Contexts/UserContext';
type User = {
    id?:number,
    name:string,
    email:string
}

function App() {

  const user:User = {
    name:"Armadon",
    email:"armadon@mail.com"
  }

  return (
    <UserContext value={user}>
        <Header />
    </UserContext>
  )
}

export default App
