import "./TopFilter.css";

const Filter = ({ itemPerPage, onchange, onChangeViewMode, viewmode }) => {
  return (
    <div>
      <div className="top-product-filter">
        <div className="change-product-show">
          <div className="product-sort">
            <p>SORT BY:</p>
            <div className="select-box">
              <select name="" id="">
                <option value="Pupolar">Pupolar</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>
          <div className="product-show">
            <p>SHOW:</p>
            <div className="select-box">
              <select name="" id="" value={itemPerPage} onChange={onchange}>
                <option value="20">20</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="product-structure">
          <i
            className={`bi bi-grid ${viewmode === "grid" ? "active" : ""}`}
            onClick={() => onChangeViewMode("grid")}
          ></i>
          <i
            className={`bi bi-list-task ${viewmode === "list" ? "active" : ""}`}
            onClick={() => onChangeViewMode("list")}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Filter;
