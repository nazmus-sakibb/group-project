import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
<<<<<<< HEAD
import incubatorData from '../../Components/fakeData/incubator.json';
=======
import upcomingStartupsCard from '../../Components/fakeData/home.json';
import incubatorData from '../../Components/fakeData/incubator.json';
import IncubatorSliderBar from '../../Components/IncubatorSlideBar/IncubatorSliderBar';
import Slider from "react-slick";
>>>>>>> b3711e3d41a5b0b5af645ca2bb94a0fd0b0ad2b7

const Incubator = () => {
  
  const [incubators, setIncubators] = useState([]);


    const [startupsCards, setStartupsCards] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

    useEffect(() => {
        setStartupsCards(upcomingStartupsCard);
    }, [])


    useEffect(() => {
        setIncubators(incubatorData);
    }, [])

    return (
      <div className="container-brand">

        <div className="incubator-bar rounded">
          <Slider {...settings}>
                    {
                        startupsCards.map(startupsCard => <IncubatorSliderBar startupsCard={startupsCard} />)
                    }
            </Slider>
        </div>


        <div className="row">
<<<<<<< HEAD
          <div className="col-md-3"><Sidebar></Sidebar></div>
=======
          <div className="col-md-3">
            <Sidebar/>
          </div>
>>>>>>> b3711e3d41a5b0b5af645ca2bb94a0fd0b0ad2b7
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