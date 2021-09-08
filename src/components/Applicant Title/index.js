import React from 'react';

// #region imports
//Components
import { Row, Col, Image } from 'react-bootstrap';
// #endregion imports

// #region component
const ApplicantTitle = ({
    profilePic,
    name,
    jobTitle,
    textColor
}) => {
    return (
        <Row className='Applicant-title align-items-center justify-content-lg-center pb-4'>
            <Col md={{span: 4, offset: 1, order: 2}} lg={{span: 3, offset: 1}}>
                <div className='Applicant-image-wrapper d-flex align-items-center justify-content-center mb-2 mb-md-0 shadow'>
                    <Image className='Applicant-image' fluid roundedCircle src={profilePic} />
                </div>
            </Col>
            <Col md={{span: 7, order: 1}} lg={6}>
                <h1 className='fw-bold text-uppercase'>{name}</h1>
                <h4 className={`${textColor}`}>{jobTitle}</h4>
            </Col>
        </Row>
    );
};

ApplicantTitle.defaultProps = {
    name: 'Applicant Name',
    jobTitle: 'Applicant Job Title'
};

export default ApplicantTitle;
// #endregion component