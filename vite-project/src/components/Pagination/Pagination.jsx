import "./Pagination.css";
import { PaginationButton } from "./PaginationButton.jsx";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-box">
      {pages.map((page) => (
        <PaginationButton
          key={page}
          amount={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        />
      ))}
    </div>
  );
};
export default Pagination;
