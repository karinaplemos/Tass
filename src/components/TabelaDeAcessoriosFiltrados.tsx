import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import './EstiloProdutos.css';
import Paginacao from "./Paginacao";
import Pesquisa from "./Pesquisa";
import 'bootstrap/dist/css/bootstrap.min.css';

const TabelaDeAcessoriosFiltrados = () => {

  const [acessorios, setAcessorios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itensPorPagina = 5; // Define o número máximo de itens por página
  const [acessoriosFiltrados, setAcessoriosFiltrados] = useState([]); // Novo estado para os acessórios filtrados
  const [pesquisaNome, setPesquisaNome] = useState(""); // Novo estado para armazenar o nome da pesquisa
  const [mensagem, setMensagem] = useState(""); // Novo estado para armazenar o nome da pesquisa

  const getAcessorios = async () => {
    try{
      const response = await axios.get("http://localhost:8080/acessorio");
      const data = response.data;
      setAcessorios(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getAcessorios();
  }, []);

  
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itensPorPagina;
  const indexOfFirstItem = indexOfLastItem - itensPorPagina;
  const currentItens = acessoriosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (searchNome: string) => {
    // Filtra os acessórios com base no nome pesquisado
    const acessoriosFiltrados = acessorios.filter((acessorio) =>
      acessorio.nome.toLowerCase().includes(searchNome.toLowerCase())
    );
    if(acessoriosFiltrados.length === 0){
      setMensagem("Nenhum resultado encontrado!"); // Define a mensagem de sucesso
    }

    // Atualiza o estado dos acessórios filtrados
    setAcessoriosFiltrados(acessoriosFiltrados);
    setCurrentPage(1); // Reinicia a página para a primeira página após a pesquisa

  };
  

  const handleRetrieveNome = (nome: string) => {
    setPesquisaNome(nome); // Atualiza o estado com o nome pesquisado pelo usuário
  };


  return (
      <div className="contListaProd">
        <Pesquisa onRetrieveNome={handleRetrieveNome} onSearch={handleSearch} />
        {acessoriosFiltrados.length === 0 ? (
        mensagem
      ) : (
        <div>
            <table className="table table-responsive table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th className="align-middle text-center">Id</th>
                  <th className="align-middle text-center">Nome</th>
                  <th className="align-middle text-center">Descrição</th>
                  <th className="align-middle text-center">Preço</th>
                  <th className="align-middle text-center">Categoria</th>
                </tr>
              </thead>
              <tbody>
                {currentItens.map((acessorio) => (
                  <tr key={acessoriosFiltrados.id}>
                    <td className="align-middle text-center">{acessorio.id}</td>
                    <td className="align-middle">{acessorio.nome}</td>
                    <td className="align-middle">{acessorio.descricao}</td>
                    <td className="align-middle">{acessorio.preco}</td>
                    <td className="align-middle text-center">{acessorio.categoria.nome}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          {/* Renderiza a paginação */}
          <Paginacao
            totalItens={acessoriosFiltrados.length}
            itensPorPagina={itensPorPagina}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
    
  );
};

export default TabelaDeAcessoriosFiltrados;


