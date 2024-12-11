import './TopFilter.css';

const Filter = ()=>{

    return(
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
                        <select name="" id="">
                            <option value="20">20</option>
                            <option value="10">10</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="product-structure">
                <i className="fa fa-th" aria-hidden="true"></i>
                <i className="fa fa-th-list" aria-hidden="true"></i>

                </div>
            </div>
        </div>
    )
}

export default Filter;