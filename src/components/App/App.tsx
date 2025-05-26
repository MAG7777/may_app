import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';
import FormCom from '../elements/EventTest/Form';
import './App.css';

function App() {

  const handleClickTest  = ()=>{
    alert("Click")
    return "string"
  }

  return (
    <>

      <main className='app'>
        <FormCom />
        <Header />
        <Home message={"Message from App"}  clickTesct={handleClickTest}/>
        <Footer />
      </main>

    </>
  )
}

export default App
