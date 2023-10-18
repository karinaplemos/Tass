import logo from "/media/logo.png";
import "./NavBar.css";
import { MdShoppingCart } from "react-icons/md";

const NavBar = ({}) => {
  return (
    <header className="NavBar">
        
        <a href="/">
            <img src={logo} alt="Tass Online" className="logo" />
        </a>
        <ul className="nav-ul">
            <li className="nav-li navProdutos">
                <a className="a_style" href="/sobre" >Sobre</a>  
            </li>
            <li className="nav-li navProdutos">
                <a className="a_style" href="/duvidas">Dúvidas</a>
            </li>
            <li className="nav-li navProdutos">
                <a className="a_style" href="/produtos">Produtos</a>
            </li>
            <li className="nav-li">
                <button className="style_button_nav">
                    <span className="countCart"> 0 </span>
                    <MdShoppingCart className="iconCart" size={30} />
                </button>
               
            </li>
        </ul>
    </header>
  );
};

export default NavBar;