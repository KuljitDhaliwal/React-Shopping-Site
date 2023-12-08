import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allProducts } from '../../redux/slices'
import { addToCart } from '../../redux/slices/cartSlice'
import './Products.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Products({filterDataValue}) {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.allData)
  let finalProducts = []
  finalProducts = state.data && state.data.map((category) => {
    return category
  })
  console.log('finalProducts', finalProducts)
  let products = []
  products = finalProducts && finalProducts.filter((item) => item.category === filterDataValue)
  console.log('Price', products)
  const handleCart = (product) => {
    dispatch(addToCart(product))
    toast.success(product.title + 'Added!', {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

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
          {products && products.map((element, key) => {
            return <div className="col-md-3 my-2" key={key}>
              <div className="card h-100">
                <img src={element.image} className="card-img-top image-responsive" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}...</p>
                  <a href="#" className="btn btn-primary" onClick={() => handleCart(element)}>Add to Cart</a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Products
