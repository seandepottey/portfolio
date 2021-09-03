import React from 'react';

// #region imports
//Components
import { Image } from 'react-bootstrap';
// #endregion imports

// #region component
const ApplicantTitle = ({
    profilePic,
    name,
    jobTitle
}) => {
    return (
        <div className=''>
            <Image src={profilePic} />
            <div>
                <h1>{name}</h1>
                <h3>{jobTitle}</h3>
            </div>
        </div>
    );
};

ApplicantTitle.defaultProps = {
    name: 'Applicant Name',
    jobTitle: 'Applicant Job Title'
};

export default ApplicantTitle;
// #endregion component