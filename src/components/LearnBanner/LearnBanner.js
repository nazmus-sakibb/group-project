import React from 'react';
import worldImg from '../../images/world.png'
import './LearnBanner.css'

const LearnBanner = () => {
    return (
      <main className="container d-flex align-items-center">
        <div className="row">
          <div className="col-md-7">
            <img className="img-fluid learnBanner-img" src={worldImg} alt="" />
          </div>
          <div className="col-md-5 course-banner">
            <div className="d-flex flex-column align-items-center ">
              <h1 className="mt-5" style={{ color: "#ffff" }}>
                Learn high in demand <br /> IT Skills & Get Crypto
              </h1>
              <h3 className="ms-5">
                {" "}
                <i className="text-white">powered by</i> KoinStreet
              </h3>
            </div>
          </div>
        </div>
      </main>
    );
};

export default LearnBanner;