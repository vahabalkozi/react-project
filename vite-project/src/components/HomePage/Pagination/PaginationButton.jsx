import "./Pagination.css";

export const PaginationButton = ({ amount, isActive, onClick }) => {
  return (
    <div>
      <button
        className={`pagination-button ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {amount}
      </button>
    </div>
  );
};
