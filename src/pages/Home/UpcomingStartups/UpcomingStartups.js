import React, { useEffect, useState } from 'react';
import upcomingStartupsCard from '../../../components/fakeData/home.json';

const UpcomingStartups = () => {
    const [startupsCard, setStartupsCard] = useState([]);

    useEffect( () => {
        setStartupsCard(upcomingStartupsCard);
    }, [])

    return (
        <div>
            <h2>Upcoming Startups: {startupsCard.length}</h2>
            <h2>Upcoming Startups: {startupsCard.length}</h2>
        </div>
    );
};

export default UpcomingStartups;