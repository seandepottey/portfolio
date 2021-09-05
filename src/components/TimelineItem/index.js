import React from 'react';

// #region imports
// #endregion imports

// #region component
const TimelineItem = ({
    companyName,
    jobTitle,
    location,
    timeFrame,
    experienceItem
}) => {
    let listItem = <></>;
    
    return (
        <div>
            <h3>{companyName}</h3>
            <h4>{jobTitle} | {location}</h4>
            <h6 className='text-secondary fw-light fst-italic'><time>{timeFrame}</time></h6>
            {experienceItem}
        </div>
    );
};
// #endregion component

export default TimelineItem;