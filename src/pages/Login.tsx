import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import login_img from "/media/be_yourself_login.png";


function Login() {
    return (
    <div className="Login">
          <div className="container p-5 py-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="a_style" href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Login</li>
                </ol>
            </nav>
            <p>
                Por favor, faça o login
            </p>
            <div className='row'>
                <div className="card-container">
                    <form>
                        <input className="card-container2" type="text" name="email" placeholder="E-mail"/>
                        <input className="card-container2" type="text" name="senha" placeholder="Senha"/>
                        <button type="submit" className="btn btn-cream btn-block">Login</button>
                    </form> 
                </div>
                <img className="card-container3" src={login_img} alt="Login" />
            </div>
            
        </div>
    </div>
  );
}

export default Login;