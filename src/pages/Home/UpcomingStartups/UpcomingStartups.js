import React, { useEffect, useState } from 'react';
import upcomingStartupsCard from '../../../components/fakeData/home.json';
import StartupsCardDetails from '../StartupsCardDetails/StartupsCardDetails';

const UpcomingStartups = () => {
    const [startupsCards, setStartupsCards] = useState([]);

    useEffect( () => {
        setStartupsCards(upcomingStartupsCard);
    }, [])

    return (
        <div>
            <h2>Upcoming Startups: {startupsCards.length}</h2>
            {
                startupsCards.map(startupsCard => <StartupsCardDetails startupsCard={startupsCard}/>)
            }
        </div>
    );
};

export default UpcomingStartups;