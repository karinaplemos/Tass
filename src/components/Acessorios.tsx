import { SetStateAction, useEffect, useState } from 'react';
import { ButtonTypes } from '../pages/Home';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import axios from 'axios';
import './Acessorio.css';
import Paginacao from "./Paginacao";

interface Props {
  type: ButtonTypes;
}

const Acessorios = (props: Props) => {
  const itensPorPagina = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [acessorios, setAcessorios] = useState([]);

  useEffect(() => {
    const getAcessorios = async (url: string) => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setAcessorios(data);
      } catch (error) {
        console.log(error);
      }
    };

    switch (props.type) {
      case ButtonTypes.All:
        getAcessorios("http://localhost:8080/acessorio");
        break;
      case ButtonTypes.Rings:
        getAcessorios("http://localhost:8080/acessorio/categoria/1");
        break;
      case ButtonTypes.Toys:
        getAcessorios("http://localhost:8080/acessorio/categoria/2");
        break;
      case ButtonTypes.Necklaces:
        getAcessorios("http://localhost:8080/acessorio/categoria/3");
        break;
      default:
        break;
    }
  }, [props.type]);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  
  const indexOfLastItem = currentPage * itensPorPagina;
  const indexOfFirstItem = indexOfLastItem - itensPorPagina;
  const currentItens = acessorios.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="items">
        {currentItens.map((acessorio: { nome: string; preco: { toLocaleString: (arg0: string, arg1: { style: string; currency: string; }) => number; }; }) => (
        <div className="item" key={acessorio.nome}>
          <img src={"/media/"+acessorio.nome+".png"} alt={acessorio.nome} />
          <p>{acessorio.nome}</p>
          <div className="infos">
            <h3>
              {acessorio.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
          </div>
          <button className="addCart">
            <span>Adicionar</span>
            <MdOutlineAddShoppingCart size={25} className="iconAdd" />
          </button>
        </div>
        ))}
      </div>
      {acessorios.length === 0 && (
        <h4 className="naoEncontrado">Nenhum produto encontrado</h4>
      )}
      {/* Renderiza a paginação */}
      <Paginacao
        totalItens={acessorios.length}
        itensPorPagina={itensPorPagina}
        onPageChange={handlePageChange}
      />
      <br></br>
      <br></br>
    </div>

  );
};

export default Acessorios;
