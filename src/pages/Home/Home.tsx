import "./Home.css";
import { Button, DangerButton } from "../../components/Button/Button.styled";

//Alternative import way
// import * as S from "../../components/Button/Button.styled";
// And we can use it as --->>>
{/* <S.Button $size="small">Small</S.Button> */}


const Home = () => {

    return (
        <>
            <Button $size="small">Small</Button>
            <Button $size="medium">Medium</Button>
            <Button $size="large">Large</Button>

            <Button $primary={true}>Primary button</Button>
            <Button $secondary={true}>Secondary button</Button>
            <Button disabled>Non active</Button>

            <DangerButton >Worning !!!</DangerButton>
            <DangerButton as="a" href="#">HREF</DangerButton>
            <DangerButton as="div">DIV</DangerButton>

            {/* <Button>Firsst button</Button>
        <Button $highlighted>Highlighted  button</Button> */}
        </>

    )
}

export default Home;