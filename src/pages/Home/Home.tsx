import "./Home.css";
import programmer from "../../assets/programmer.jpg"

function Home(){
    return(
        <div className="home-page">
            <h2>Home page</h2>
            <p>Welcome to our app</p>
            <img src={programmer} alt="Prog" />
            <img src="images/laptop.jpg" alt="Laptop" />
        </div>
    )
}

export default Home;