import "./Home.css";
import programmer from "../../assets/programmer.jpg"
import { useState } from "react";

interface HomeProps {
  message: string;
  clickTesct: () => void
}


const Home: React.FC <HomeProps>= ({message, clickTesct})=>{
    const [count, setCount] = useState<number>(0);

    const handleClick = () =>{
        setCount(prevCount => prevCount +=1);
        setCount(prevCount => prevCount +=1);
       
    }
    return(
        <>
        <h1>{message}</h1>
        <h1>{count}</h1>
        <button onClick={clickTesct}>Click me</button>
        <button onClick={handleClick}>Click me 2</button>
        </>
        // <div className="home-page">
        //     <h2>Home page</h2>
        //     <p>Welcome to our app</p>
        //     <img src={programmer} alt="Prog" />
        //     <img src="images/laptop.jpg" alt="Laptop" />
        // </div>
    )
}

export default Home;