import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import './EstiloProdutos.css';
import Paginacao from "./Paginacao";
import 'bootstrap/dist/css/bootstrap.min.css';

const TabelaDeAcessorios = () => {

  const [acessorios, setAcessorios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itensPorPagina = 5; // Define o número máximo de itens por página


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
  const currentItens = acessorios.slice(indexOfFirstItem, indexOfLastItem);


  const handleRemoveAcessorio = async (id: number) => {
    try {
      // Faz a chamada DELETE para o servidor para remover o acessório pelo ID
      await axios.delete(`http://localhost:8080/acessorio/${id}`);
      // Atualiza a lista de acessórios após a exclusão bem-sucedida
      getAcessorios();
    } catch (error) {
      console.error("Erro ao remover o acessório:", error);
    }
  };
  
  return (
    <div className="contListaProd">
        <div className="mb-4">
            <h5>Listagem dos acessórios</h5>
            <hr className="mt-0" />            
        </div>
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
              <tr key={acessorio.id}>
                <td className="align-middle text-center">{acessorio.id}</td>
                <td className="align-middle">{acessorio.nome}</td>
                <td className="align-middle">{acessorio.descricao}</td>
                <td className="align-middle">{acessorio.preco}</td>
                <td className="align-middle text-center">{acessorio.categoria.nome}</td>
                <td width="10%" className="align-middle text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveAcessorio(acessorio.id)} 
                  >
                    Remover
                  </button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* Renderiza a paginação */}
      <Paginacao
        totalItens={acessorios.length}
        itensPorPagina={itensPorPagina}
        onPageChange={handlePageChange}
      />
    </div>
    
  );
};

export default TabelaDeAcessorios;
