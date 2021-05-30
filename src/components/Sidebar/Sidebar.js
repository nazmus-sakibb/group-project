import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './Sidebar.css'

const Sidebar = () => {
    return (
      <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-1 px-1 bg-white">
        <p>Founded 17th May, 2015</p>
        <hr />
        <small>Website</small>
        <a href="mangoswap.com">mangoswap.com</a> 
        <h3> <AiOutlineTwitter/> </h3>
        <h3> <FaLinkedinIn/> </h3>
        <h3> <FaFacebookF/> </h3>
        <small>Location</small>
        <p>San Francisco, California</p>
        <small>Team Size</small>
        <p>100-150 People</p>
        <hr />
        <h4>Meet the team</h4>
      </div>
    );
};

export default Sidebar;