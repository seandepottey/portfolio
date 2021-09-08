import React from 'react';

// #region imports
// #endregion imports

// #region component
const TimelineItem = ({
    companyName,
    companySite,
    jobTitle,
    location,
    timeFrame,
    bulletsContent
}) => {
    let bullets = [];
        
    const createTimelineBullet = (bulletContent) => {
        const bullet = (
            <li>{bulletContent.value}</li>
        );
        bullets.push(bullet);
    };

    const timelineItemBullets = bulletsContent;
    timelineItemBullets.forEach(bullet => createTimelineBullet(bullet));
    let list = (
        <ul>
            {bullets}
        </ul>
    );

    let companyNameNode = companyName;
    if(companySite) {
        companyNameNode = <a target='_blank' href={companySite}>{companyName}</a>;
    }
    
    return (
        <div className='TimelineItem mb-5'>
            <h3>{jobTitle}</h3>
            <h4 className={'fw-light'}>{companyNameNode} <span className='text-secondary'>|</span> {location}</h4>
            <h6 className='text-secondary fw-light fst-italic mb-2'><time>{timeFrame}</time></h6>
            {list}
        </div>
    );
};
// #endregion component

export default TimelineItem;