import React from 'react';

// #region imports
//Components
import { Image } from 'react-bootstrap';
// #endregion imports

// #region component
const ApplicantTitle = ({
    profilePic,
    name,
    jobTitle,
    textColor
}) => {
    return (
        <div className='Applicant-title d-flex align-items-center pb-4'>
            <div className='Applicant-image-wrapper d-flex align-items-center justify-content-center shadow'>
                <Image className='Applicant-image' fluid roundedCircle src={profilePic} />
            </div>
            <div className='ps-5'>
                <h1 className='fw-bold text-uppercase'>{name}</h1>
                <h4 className={`${textColor}`}>{jobTitle}</h4>
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