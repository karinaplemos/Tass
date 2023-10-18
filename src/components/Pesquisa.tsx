import { useRef } from "react";

interface Props {
  onRetrieveNome: (nome: string) => void;
  onSearch: (nome: string) => void;
}

const Pesquisa = ({onRetrieveNome, onSearch }: Props) => {
  const pesqRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div className="mb-4">
        <h5>Pesquisa</h5>
        <hr className="mt-0" />            
     </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const searchNome = pesqRef.current?.value!;
          onRetrieveNome(searchNome);
          onSearch(searchNome); // Chama a função de pesquisa no componente pai (TabelaDeAcessorios)
        }}
        className="d-flex mb-3"
        role="search"
      >
        <input
          ref={pesqRef}
          className="form-control me-2 contInput"
          placeholder="Digite aqui ..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Pesquisar
        </button>
      </form>
    </div>
    
  );
};

export default Pesquisa;
