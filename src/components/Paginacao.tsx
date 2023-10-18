import { SetStateAction, useState } from "react";

const Paginacao = ({ totalItens, itensPorPagina, onPageChange }) => {
  const totalPages = Math.ceil(totalItens / itensPorPagina);
  const [currentPage, setCurrentPage] = useState(1);
  

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxPagesToShow = 10; // Quantidade máxima de números de páginas a serem mostrados
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (totalPages > maxPagesToShow) {
      if (endPage === totalPages) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      } else if (startPage === 1) {
        endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
      }
    }

    if (startPage > 1) {
      pages.push(
        <li key={1} className="page-item">
          <button className="page-link button_pag" onClick={() => handlePageChange(1)}>
            1
          </button>
        </li>
      );
      if (startPage > 2) {
        pages.push(
          <li key="ellipsisStart" className="page-item">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
          <button className="page-link button_pag" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <li key="ellipsisEnd" className="page-item">
            <span className="page-link">...</span>
          </li>
        );
      }
      pages.push(
        <li key={totalPages} className="page-item">
          <button className="page-link button_pag" onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        </li>
      );
    }

    return pages;
  };
    // Retornar null se houver apenas 1 página ou nada 
    if (totalPages <= 1) {
      return null;
    }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link button_pag"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
        </li>
        {renderPaginationNumbers()}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link button_pag"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacao;
