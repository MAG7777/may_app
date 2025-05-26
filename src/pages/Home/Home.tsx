import "./Home.css";
import ControlledForm from "../../components/elements/EventTest/ControlledForm";
import UncontrolledForm from "../../components/elements/EventTest/UncontrolledForm";


const Home: React.FC= ()=>{


    return(
        <>
        <ControlledForm />
        <UncontrolledForm />
        </>
    )
}

export default Home;