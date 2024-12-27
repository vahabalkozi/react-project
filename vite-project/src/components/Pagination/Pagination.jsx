import "./Pagination.css";
import { PaginationButton } from "./PaginationButton.jsx";

const Pagination = () => {
  return (
    <div>
      <div className="pagination-box">
        <div className="text">
          <p>
            SHOWING <span>20</span>-<span>100 </span>PRODUCT
          </p>
        </div>
        <div className="buttons">
          <PaginationButton className="active" amount="1" />
          <PaginationButton amount="2" />
          <PaginationButton amount="3" />
          <PaginationButton amount=">" />
        </div>
      </div>
    </div>
  );
};
export default Pagination;
