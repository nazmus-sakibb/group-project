import React from 'react';

const StartupsCardDetails = (props) => {
    const { icon, title, shortDescription, fundStatus, fundCompletation, fundAmount  } = props.startupsCard;

    return (
        <div>
            <div className="row">
                <div className="startups-card col-md-3">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default StartupsCardDetails;