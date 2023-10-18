import Categoria from "./Categoria";

interface Acessorio {
    nome: string;
    descricao: string;
    preco: number | null;
    categoria: Categoria;
};
export default Acessorio;