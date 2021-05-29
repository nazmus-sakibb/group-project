import React, { useEffect, useState } from 'react';
import upcomingStartupsCard from '../fakeData/home.json';
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
                    <div className="upcoming-startups py-5">
                        <h2>Upcoming</h2>
                        <h2>Startups</h2>
                        <p>These visionary companies and disruptors are on their journey to change the world.</p>
                    </div>
                    {
                        startupsCards.map(startupsCard => <StartupsCardDetails startupsCard={startupsCard} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcomingStartups;