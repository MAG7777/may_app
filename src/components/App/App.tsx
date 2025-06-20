import Header from '../Header/Header';
import './App.css';
import { UserContext } from '../../Contexts/UserContext';
import { useState } from 'react';
type User = {
    id?:number,
    name:string,
    email:string
}

const userInitialValue= {
    name:"Armadon",
    email:"armadon@mail.com"
  }


function App() {
  const [user, setUser] = useState<User>(userInitialValue);

  const updateUser = (newUser:User)=>{
      setUser(newUser)
  }

  return (
    <UserContext.Provider value={{user, updateUser}}>
        <Header />
    </UserContext.Provider>
  )
}

export default App
