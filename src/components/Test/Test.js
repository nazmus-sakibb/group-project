import React, { useEffect, useState } from 'react';
import homeCardData from '../fakeData/home.json';

const Test = () => {
    const [homeCard, setHomeCard] = useState([]);
    useEffect( () => {
        setHomeCard(homeCardData);
    }, [])


    return (
        <div>
            <h2>This is test component {homeCard.length}</h2>
        </div>
    );
};

export default Test;