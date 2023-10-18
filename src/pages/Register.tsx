import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { MDBRadio } from 'mdb-react-ui-kit';
import { MDBSwitch } from 'mdb-react-ui-kit';


function Register() {
    return (
    <div className="Register">
          <div className="container p-5 py-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="a_style" href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Criar conta</li>
                </ol>
            </nav>
            <p>
                Cadastre-se gratuitamente na loja Tass
            </p>
            <div className="card-container">
                <form> 
                    <input className="card-container2" type="text" name="email" placeholder="Nome"/>
                    <input className="card-container2" type="text" name="senha" placeholder="Sobrenome"/>
                    <input className="card-container2" type="text" name="senha" placeholder="E-mail"/>
                    <input className="card-container2" type="text" name="senha" placeholder="dd/mmm/aaaa"/>
                    <input className="card-container2" type="text" name="senha" placeholder="Senha"/>
                    <input className="card-container2" type="text" name="senha" placeholder="Confirme sua senha"/>
                    <div className="row mb-3">
                        <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Feminino' />
                        <br></br>
                        <br></br>
                        <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Masculino' defaultChecked />
                        <br></br>
                        <br></br>
                        <MDBSwitch id='flexSwitchCheckDefault' label='Concordo com os termos de uso da loja Tass.' />
                    </div>
                    <button type="submit" className="btn btn-cream btn-block">Cadastrar-se</button>
                </form> 
            </div>
        </div>
    </div>
  );
}
export default Register;