import "./Pagination.css";
export const PaginationButton = ({ amount }) => {
  return (
    <div>
      <div className="pagination">
        <div className="pagination-button">
          <a href="#">{amount}</a>
        </div>
      </div>
    </div>
  );
};
