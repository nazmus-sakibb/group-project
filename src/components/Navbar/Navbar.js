import React from 'react';
import logo from '../../images/logo.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid container-brand">
                    <a className="navbar-brand" href="#"><img src={logo} style={{ height: "50px" }} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 main-menu">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><AiOutlineTwitter /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><AiFillFacebook /></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"><IoLogoLinkedin /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"><IoLogoInstagram /></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main-menu">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Incubator</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Learn Page</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;