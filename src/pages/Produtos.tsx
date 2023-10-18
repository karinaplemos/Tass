import 'bootstrap/dist/css/bootstrap.min.css';
import CadastroDeAcessorio from '../components/CadastroDeAcessorio';
import TabelaDeAcessorios from '../components/TabelaDeAcessorios';
import TabelaDeAcessoriosFiltrados from '../components/TabelaDeAcessoriosFiltrados';
import CadastroDeCategoria from '../components/CadastroDeCategoria';
import TabelaDeCategorias from '../components/TabelaDeCategorias';

const Produtos = () => {

  return (
    <>
      <TabelaDeAcessoriosFiltrados/>
      <CadastroDeAcessorio/>
      <CadastroDeCategoria/>
      <TabelaDeAcessorios/>
      <TabelaDeCategorias/>
    </>
  );
};
export default Produtos;
