import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import incubatorData from '../../components/fakeData/incubator.json';

const Incubator = () => {
    const [incubators, setIncubators] = useState([]);


    useEffect(() => {
        setIncubators(incubatorData);
    }, [])

    return (
      <div className="container-brand">
        <div className="incubator-bar p-3">
          <div className="row">
            <div className="col-md-3">
              <img src="https://i.ibb.co/861bq82/mangoswap-ico.png" alt="" />
              <h3 className="m-0 pt-2 d-inline">
                <strong>Mangoswap</strong>
              </h3>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="m-0">Funds raised</p>
                </div>
                <div>
                  <p className="m-0">
                    <small>50% complete</small>
                  </p>
                </div>
              </div>
              <p className="m-0">
                <strong>$200,000/$400,000</strong>
              </p>
            </div>
            <div className="col-md-3 pt-3">
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-md-3">
              <button
                style={{
                  background:
                    "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
                  border: "none",
                }}
                className="btn text-white btn-center rounded-0 mt-1 px-4"
              >
                Fund Startups
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"><Sidebar/></div>
          <div className="col-md-9">
            <div className="incubator-container">
              <div className="about-startup-container p-4">
                <h4>About Startup</h4>
                {incubators.map((incubator) => (
                  <p>{incubator.aboutStartupDescription}</p>
                ))}
              </div>
              <hr />
              <div className="vision-container p-4">
                <h4>Vision</h4>
                {incubators.map((incubator) => (
                  <p>{incubator.visionDescription}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Incubator;