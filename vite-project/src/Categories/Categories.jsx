import './Categories.css';

export const Category = ({name,quantity,id,conect})=>{

    return(
        <div className='category-item'>
            <label htmlFor={conect}>
                <input type="checkbox" id={id} />
               {name} <span>({quantity})</span>
            </label>
        </div>
    )
}

const CategoryiesList = ()=>{

    return(
        <div className='category-list'>
            <div className="category-title">
                <h2>CATEGORIES</h2>
            </div>
            <Category
            id="laptop"
            conect="laptop"
            name="Laptops"
            quantity="120"
            />
            <Category
             id="phone"
             conect="phone"
             name="Smartphones"
             quantity="740"
            />
            <Category
             id="camera"
             conect="camera"
             name="Cameras"
             quantity="1450"
            />
            <Category
             id="accessories"
             conect="accessories"
             name="Accessories"
             quantity="578"
            />
            <Category
             id="whatch"
             conect="whatch"
             name="Whatch"
             quantity="120"
            />
            <Category
            id="headphone"
            conect="headphone"
            name="Headphone"
            quantity="740"
            />
        </div>
    )
}

export default CategoryiesList;