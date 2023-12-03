import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allProducts } from '../../redux/slices'
import {addToCart} from '../../redux/slices/cartSlice'
import './Products.css'

function Products() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.allData)
  console.log('Price', state)
  const handleCart = (product) => {
    dispatch(addToCart(product))
  }
  useEffect(() => {
    dispatch(allProducts());
  }, [])
  if (state.isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {state.data && state.data.products.map((element, key) => {
            return <div className="col-md-3 my-2" key={key}>
              <div className="card h-100">
                <img src={element.thumbnail} className="card-img-top image-responsive" alt="..." style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover"
                }}/>
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description.slice(0,45)}...</p>
                  <a href="#" className="btn btn-primary" onClick={()=>handleCart(element)}>Add to Cart</a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Products
