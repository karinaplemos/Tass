import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Duvidas from './pages/Duvidas';
import Produtos from './pages/Produtos';

function App() {

  
    return (
      <BrowserRouter>
          <div className='filter'>
            <Link className="filterLink text-white" to="/login">
              Login
            </Link>
            <Link className="filterLink text-white" to="/cadastro">Cadastrar-se</Link>
          </div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/produtos" element={<Produtos />} />
       </Routes>  
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
