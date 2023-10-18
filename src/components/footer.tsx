import "./Footer.css";
import { BsInstagram, BsPinterest, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-lg-5 col-md-6 mb-3">
            <h2><strong>Acompanhe nossas novidades</strong></h2>
            <p>Cadastre seu e-mail para receber informações exclusivas</p>
            <div className="row">
              <form>
                <input className="form-control mb-1 cad_style" type="text" name="email" placeholder="E-mail"/>
                <input className="btn btn-net cad_style" type="submit" value="Cadastrar" />
              </form>  
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-3">
            <h2><strong>Contato</strong></h2>
            <ul className="list-unstyled">
                <li><i className="fas fa-phone"></i>(21) 99621-9300</li>
                <li><i className="fas fa-envelope"></i> <a className="a_style_footer" href='mailto:contatotassonline@gmail.com'>contatotassonline@gmail.com</a></li>
                <li><i className="fas fa-map-marker-alt"></i>Rua do Oscarino Francisco da Costa, 2057, Caju (Ponta Negra), Maricá, RJ - 24918-200</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <h2><strong>Redes Sociais</strong></h2>
            <div className="row">
              <div className="col-3">
                <a className="a_style_footer"  href="https://www.instagram.com/tass.online/" target={"_blank"}>
                  <BsInstagram size={30} />
                </a>
              </div>
              <div className="col-3">
                <a className="a_style_footer"  href="https://br.pinterest.com/tassonlinne/" target={"_blank"}>
                  <BsPinterest size={30} />
                </a>
              </div>
              <div className="col-3">
                <a className="a_style_footer"  href="mailto:contatotassonline@gmail.com" target={"_blank"}>
                  <MdOutlineMailOutline size={30} />
                </a>
              </div>
              <div className="col-3">
                <a className="a_style_footer" href="https://api.whatsapp.com/send?phone=2199621-9300&text=Ol%C3%A1%21%20" target={"_blank"}>
                  <BsWhatsapp size={30} />
                </a>
              </div>
            </div>
          </div>

        </div>
        <p className="mb-1 text-center">
          Tass Online © Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;