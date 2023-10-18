import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import './EstiloProdutos.css';
import Paginacao from "./Paginacao";

const TabelaDeCategorias = () => {

  const [categorias, setCategorias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itensPorPagina = 5; // Define o número máximo de itens por página
  const [mensagem, setMensagem] = useState<string>(""); // Estado para exibir mensagem na tela


  const getCategorias = async () => {
    try{
      const response = await axios.get("http://localhost:8080/categoria");
      const data = response.data;
      setCategorias(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getCategorias();
  }, []);

  
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itensPorPagina;
  const indexOfFirstItem = indexOfLastItem - itensPorPagina;
  const currentItens = categorias.slice(indexOfFirstItem, indexOfLastItem);


  const handleRemoveAcessorio = async (id: number) => {
    try {
      // Faz a chamada DELETE para o servidor para remover a categoria pelo ID
      await axios.delete(`http://localhost:8080/categoria/${id}`);
      // Atualiza a lista de acessórios após a exclusão bem-sucedida
      getCategorias();
    } catch (error) {
      setMensagem("Erro ao remover a categoria");
      console.error("Erro ao remover a categoria:", error);
    }
  };
  
  return (
    <div className="contListaProd">
        <div className="mb-4">
            <h5>Listagem das categorias</h5>
            <hr className="mt-0" />            
        </div>
        <table className="table table-responsive table-bordered table-hover table-sm">
          <thead>
            <tr>
              <th className="align-middle text-center">Id</th>
              <th className="align-middle text-center">Nome</th>            
            </tr>
          </thead>
          <tbody>
            {currentItens.map((acessorio) => (
              <tr key={acessorio.id}>
                <td className="align-middle text-center">{acessorio.id}</td>
                <td className="align-middle">{acessorio.nome}</td>
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
        totalItens={categorias.length}
        itensPorPagina={itensPorPagina}
        onPageChange={handlePageChange}
      />
      {mensagem && <p>{mensagem}</p>} {/* Mostra a mensagem na tela se existir */}
    </div>
  );
};

export default TabelaDeCategorias;
