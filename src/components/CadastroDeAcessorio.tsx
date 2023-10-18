import axios from "axios";
import { useEffect, useState } from "react";
import Acessorio from "../interfaces/Acessorio";
import Categoria from "../interfaces/Categoria";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EstiloProdutos.css";

const CadastroAcessorio: React.FC = () => {
  const [acessorio, setAcessorio] = useState<Acessorio>({
    nome: "",
    descricao: "",
    preco: null,
    categoria: { nome: "" },
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [mensagem, setMensagem] = useState<string>(""); // Estado para exibir mensagem na tela


  useEffect(() => {
    // Fazendo a chamada para a API usando Axios para obter as categorias disponíveis
    axios.get<Categoria[]>("http://localhost:8080/categoria")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter categorias:", error);
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    // Verifica se o campo que foi alterado é o campo de categoria
    if (name === "categoria.nome") {
      // Encontra a categoria selecionada com base no nome
      const categoriaSelecionada = categorias.find((categoria) => categoria.nome === value);
      if (categoriaSelecionada) {
        // Atualiza a categoria selecionada no estado acessorio
        setAcessorio((prevState) => ({
          ...prevState,
          categoria: categoriaSelecionada,
        }));
      }
    } else {
      // Atualiza normalmente os outros campos
      setAcessorio((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (acessorio.nome && acessorio.descricao && acessorio.preco !== null && acessorio.categoria.nome) {
      axios.post<Acessorio>("http://localhost:8080/acessorio", acessorio)
        .then((response) => {
          console.log("Acessório cadastrado com sucesso:", response.data);
          setMensagem("Cadastro realizado com sucesso!"); // Define a mensagem de sucesso
           // Resetar os campos do formulário para os valores iniciais
           setAcessorio({
            nome: "",
            descricao: "",
            preco: null,
            categoria: { nome: "" },
          });
        })
        .catch((error) => {
          console.error("Erro ao cadastrar acessório:", error);
          setMensagem("Erro ao cadastrar o acessório. Por favor, tente novamente."); // Define a mensagem de erro
        });
    } else {
      setMensagem("Por favor, preencha todos os campos obrigatórios."); // Define a mensagem de erro para campos obrigatórios não preenchidos
    }
    
  };

  return (
    <div className="contListaProd">
      <div className="mb-4">
            <h5>Cadastro de novo acessório</h5>
            <hr className="mt-0" />            
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row mb-2">
              <label className="contLabel">
                Nome do Acessório:
                <input className="form-control me-2 contInput" type="text" name="nome" value={acessorio.nome} onChange={handleChange} required />
              </label>
              <br></br>
              <br></br>
              <label className="contLabel">
                Descrição do Acessório:
                <textarea className="form-control me-2 contInput" name="descricao" value={acessorio.descricao} onChange={handleChange} required  />
              </label>
        </div> 
        <div className="row mb-2">
              <label className="contLabel">
                Preço do Acessório:
              <input className="form-control me-2 contInput" type="number" name="preco" value={acessorio.preco !== null ? acessorio.preco : ''}  onChange={handleChange} required  />
              </label>
              <br></br>
              <br></br>
              <label className="contLabel">
                Categoria do Acessório:
                <select className="form-control me-2 contInput" name="categoria.nome" value={acessorio.categoria.nome} onChange={handleChange} required >
                  <option value="">Selecione uma categoria</option>
                    {categorias.map((categoria) => (
                    <option key={categoria.nome} value={categoria.nome}>{categoria.nome}
                  </option>
                  ))}
                </select>
              </label>
        </div> 
        <button className="btn btn-outline-success" type="submit">Cadastrar</button>
      </form>
      {mensagem && <div>{mensagem}</div>} {/* Mostra a mensagem na tela se existir */}
    </div>
    
  );
};

export default CadastroAcessorio;
