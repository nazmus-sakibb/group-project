import React from 'react';
import logo from '../../images/logo.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import './Navbar.css'
import {link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" <to="#"><img src={logo} style={{ height: "50px" }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 main-menu">
                            <li className="nav-item">
                                <LinkclassName="nav-link" aria-current="page" <to="#"><AiOutlineTwitter /></Link>
                            </li>
                            <li className="nav-item">
                                <LinkclassName="nav-link" <to="#"><AiFillFacebook /></Link>
                            </li>

                            <li className="nav-item">
                                <LinkclassName="nav-link" <to="#" tabindex="-1" aria-disabled="true"><IoLogoLinkedin /></Link>
                            </li>
                            <li className="nav-item">
                                <LinkclassName="nav-link" <to="#" tabindex="-1" aria-disabled="true"><IoLogoInstagram /></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main-menu">
                            <li className="nav-item">
                                <LinkclassName="nav-link active" aria-current="page" <to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <LinkclassName="nav-link" <to="#">Incubator</Link>
                            </li>

                            <li className="nav-item">
                                <LinkclassName="nav-link" <to="#" tabindex="-1" aria-disabled="true">Learn Page</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;