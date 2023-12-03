import React from 'react'
import ProptTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SideCart from './sideCart/SideCart';
import { useSelector } from 'react-redux';

function Navbar(props) {
    const state = useSelector((state) => state.cart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='navbar-nav position-relative'>
                            <SideCart />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {state.cartItemsQuantity}
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.ProptTypes = { title: ProptTypes.string }

export default Navbar
