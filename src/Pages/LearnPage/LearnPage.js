import React from 'react';
import LearnBanner from '../../Components/LearnBanner/LearnBanner';
import LearnPageBody from '../../Components/LearnPagebody/LearnPageBody';

const LearnPage = () => {
    return (
        <div>
            <LearnBanner/>
            <LearnPageBody></LearnPageBody>
        </div>
    );
};

export default LearnPage;