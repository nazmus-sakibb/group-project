import React, { useEffect, useState } from 'react';
import upcomingStartupsCard from '../../../components/fakeData/home.json';
import StartupsCardDetails from '../StartupsCardDetails/StartupsCardDetails';

const UpcomingStartups = () => {
    const [startupsCards, setStartupsCards] = useState([]);

    useEffect(() => {
        setStartupsCards(upcomingStartupsCard);
    }, [])

    return (
        <div>
            <div className="container-brand">
                <div className="startups-card-container">
                    {
                        startupsCards.map(startupsCard => <StartupsCardDetails startupsCard={startupsCard} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcomingStartups;