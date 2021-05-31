import React from 'react';
import LearnBanner from '../../components/LearnBanner/LearnBanner';
import LearnPageBody from '../../components/LearnPagebody/LearnPageBody';

const LearnPage = () => {
    return (
        <div>
            <LearnBanner/>
            <LearnPageBody></LearnPageBody>
        </div>
    );
};

export default LearnPage;