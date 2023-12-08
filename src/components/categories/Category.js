import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '../../redux/slices';

function Category({setFilterDataValue}) {
    const state = useSelector((state) => state.allData);
    const getCategory = (data, property) => {
        let cat = data.data && data.data.map((element, key) => {
             return element[property]
        })
        return (cat = [...new Set(cat)])
    }
    const categoryData = getCategory(state, "category")
    
    const updateFilterValue = (e) => {
        setFilterDataValue(e.target.value)
    }
    
    const dispatchAction = useDispatch();
    useEffect(()=>{
        dispatchAction(allProducts());
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {categoryData.map((element, key) => {
                        return <div className="col-3">
                            <button
                            key={key} 
                            type="button"
                            name="category"
                            value={element}
                                className='btn btn-primary'
                                onClick={updateFilterValue}
                        >  
                            {element}
                        </button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category
