import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaMinus, FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { cartItemIncrement } from '../../redux/slices/cartSlice'
import { cartItemDecrement } from '../../redux/slices/cartSlice'
import {cartTotalvalue} from '../../redux/slices/cartSlice'
import { removeItem } from '../../redux/slices/cartSlice'
import emptyCart from '../../Images/empty-cart.svg'
import './SideCart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SideCart() {
    const dispatchAction = useDispatch()
    const handlePlus = (product) => {
        dispatchAction(cartItemIncrement(product))
    }
    const handleMinus = (product) => {
        dispatchAction(cartItemDecrement(product))
    }
    const handleRemoveItem = (product) => {
        dispatchAction(removeItem(product))
        toast.success(product.title +'Removed!', {
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
    const selectedItems = useSelector((state) => state.cart)
    const [sidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    useEffect(() => {
        dispatchAction(cartTotalvalue())
    },[selectedItems])
    return (
        <div>
            <div className="sidebar" onClick={() => handleSidebar()}>
                <FaShoppingBag />
            </div>

            <div className={sidebar ? "overlay" : "nonOverlay"} onClick={() => handleSidebar()}></div>
            <div className={sidebar ? "showSidebar" : "hideSidebar"}>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Shopping Cart</h1>
                    <RxCross1 onClick={() => handleSidebar()} style={{ fontSize: '1.5rem' }} />
                </div>
                <div className="sidebarBody my-5">
                    <div className={selectedItems.cartItemsQuantity === 0 ? "empty-cart" : "d-none"} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10rem'
                    }}>
                        <img src={emptyCart} alt="" style={{height: "200px", margin: 'auto'}}/>
                    </div>
                    {selectedItems.cartItems?.map((element, key) => {
                        return <div className="row product-row my-5">
                            <div className="col-12">
                                <div className="cart-card d-flex align-items-center justify-content-start">
                                    <div className="cart-img">
                                        <img src={element.image} alt="..." />
                                        <div className="remove-item">
                                            <RxCross1 onClick={()=>handleRemoveItem(element)} style={{color: '#ffffff', fontSize: '30px'}}/>
                                        </div>
                                    </div>
                                    <div className="cart-item-details mx-3">
                                        <h6>{element.title}</h6>
                                        <small style={{
                                            padding: 0,
                                            margin: 0
                                        }}>Unit Price <FaRupeeSign />{element.price}</small>
                                        <div>
                                            <div className="inc-dec-btn d-flex justify-content-between align-items-center my-2">
                                                <div className="plus" onClick={() => handlePlus(element)}>
                                                    <FaPlus />
                                                </div>
                                                <h6 style={{ margin: 0 }}>{element.cartQuantity}</h6>
                                                <div className="minus" onClick={() => handleMinus(element)}>
                                                    <FaMinus />
                                                </div>
                                            </div>
                                            <div className="price mx-2">
                                                <b className='d-flex align-items-center'><FaRupeeSign /> {element.price * element.cartQuantity}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className={selectedItems.cartItems.length !== 0 ? "checkout" : "d-none"}>
                        <h6>Checkout  Total: {selectedItems.cartTotalAmount }</h6>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default SideCart
