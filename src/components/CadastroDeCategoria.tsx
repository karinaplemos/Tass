import axios from "axios";
import Categoria from "../interfaces/Categoria";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EstiloProdutos.css";

const CadastroDeCategoria: React.FC = () => {
  const [categoria, setCategoria] = useState<Categoria>({ nome: "" });
  const [mensagem, setMensagem] = useState<string>(""); // Estado para exibir mensagem na tela

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoria({ ...categoria, nome: event.target.value });
    console.log(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Fazendo a chamada para a API usando Axios
    axios.post<Categoria>("http://localhost:8080/categoria", categoria)
      .then((response) => {
        // Trate a resposta da API conforme necessário
        console.log("Categoria cadastrada com sucesso:", response.data);
        setMensagem("Categoria cadastrada com sucesso"); // Define a mensagem de sucesso
        setCategoria({
          nome: ""
        })
      })
      .catch((error) => {
        console.error("Erro ao cadastrar categoria:", error);
        setMensagem("Erro ao cadastrar categoria. Por favor, tente novamente."); // Define a mensagem de erro

      });
  };

  return (
    <div  className="contListaProd">
      <div className="mb-4">
            <h5>Cadastro de nova categoria</h5>
            <hr className="mt-0" />            
      </div>
    <form onSubmit={handleSubmit}>
      <label className="contLabel">
        Nome da Categoria:
        <input className="form-control me-2 contInput" type="text" value={categoria.nome} onChange={handleChange} />
      </label>
      <button  className="btn btn-outline-success" type="submit">Cadastrar</button>
    </form>
    {mensagem && <p>{mensagem}</p>} {/* Mostra a mensagem na tela se existir */}
    </div>
    
  );
};

export default CadastroDeCategoria;
