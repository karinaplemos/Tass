import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
    <div className="about">
          <div className="container p-5 py-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="a_style" href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Sobre</li>
                </ol>
            </nav>
            <p className="mb-4">
              Loja online de acessórios desenvolvidos com muito carinho, pensando em um design delicado e atemporal com o intuito de fornecer semijóias de qualidade a preços acessíveis, produzidas no Rio de Janeiro.
            </p>
            <p className="mb-4">
              Nosso foco é que seu pedido chegue em perfeito estado até sua casa, nossa atenção e cuidado com cada etapa é nossa garantia de qualidade.
            </p>
            <p className="mb-4">
              Embalamos o seu pedido com muito carinho, de forma que ele não sofra avarias durante o percurso, mas caso você tenha algum problema, não deixe de nos procurar em nossos canais de atendimento.
            </p>
            <p className="mb-4">
              Agradecemos pela confiança e esperamos que a gente se encontre de novo em breve :)
            </p>
        </div>
    </div>
  );
}

export default About;