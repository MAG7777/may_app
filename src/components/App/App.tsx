import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { DataFetch } from '../DataFetch';
import './App.css';

function App() {

  return (
    <>
      <main className='app'>
        <Header />
        <DataFetch />
        <Footer />
      </main>

    </>
  )
}

export default App
