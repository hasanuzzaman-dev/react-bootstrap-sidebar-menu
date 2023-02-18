import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import '../../css/MySidebarMenu.css'
import 'bootstrap/js/dist/collapse'
import { FaHamburger, FaHome, FaTh, FaUserAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MySidebar = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-dark min-vh-100">
                    <a className="text-decoration-none text-white d-flex  align-items-center ms-3 mt-2">
                        <i className="fs-4 bi bi-speedometer"></i>
                        <span className="ms-3 fs-4 d-none d-sm-inline">Brand</span>
                    </a>
                    <hr className='text-secondary d-none d-sm-block'/>

                    <ul class="nav nav-pills flex-column" id='parentMenu'>
                        <li class="nav-item text-white fs-4 my-1">
                            <Link to="/dashboard" class="nav-link text-white fs-5" activeClassName='active'>
                                <i className="fs-4 bi bi-speedometer2"></i>
                                <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li class="nav-item text-white fs-4 my-1">
                            <Link to="/home" class="nav-link text-white fs-5">
                                <i className="fs-4 bi bi-house"></i>
                                <span className="ms-3 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="#submenu" class="nav-link text-white fs-5" data-bs-toggle = "collapse" aria-current="page">
                                <i className="fs-4 bi bi-grid"></i>
                                <span className="ms-3 d-none d-sm-inline">Products</span>
                                <span className="ms-2 bi bi-caret-down-fill"></span>
                            </a>
                            <ul class="nav flex-column collapse ms-2" id='submenu' data-bs-parent='#parentMenu'>
                                <li class="nav-item text-white">
                                    <a class="nav-link text-white" href="#" aria-current="page">
                                        Item 1
                                    </a>
                                </li>
                                <li class="nav-item text-white">
                                    <a class="nav-link text-white" href="#">Item 2</a>
                                </li>
                                
                            </ul>
                        </li>


                        <li class="nav-item text-white fs-4 my-1">
                            <a href="#" class="nav-link text-white fs-5" aria-current="page">
                                <i className="fs-4 bi bi-table"></i>
                                <span className="ms-3 d-none d-sm-inline">Orders</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 my-1">
                            <a href="#" class="nav-link text-white fs-5" aria-current="page">
                                <i className="fs-4 bi bi-people"></i>
                                <span className="ms-3 d-none d-sm-inline">Customer</span>
                            </a>
                        </li>
                        
                    </ul>



                </div>

            </div>

        </div>
    );
}

export default MySidebar;