import React from 'react';

// #region imports
// Components
import { Container, Row, Col } from 'react-bootstrap';
import ApplicantTitle from '../../components/Applicant Title';
import TimelineItem from '../../components/TimelineItem';
import ContactItem from '../../components/ContactItem';
import SkillsSection from '../../components/SkillsSection';

// Media
import img_selfie from '../../assets/profile-pic-small.jpg';
// Icons
import at_icon from '../../assets/at_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import house_icon from '../../assets/house_icon.svg';
import EducationSection from '../../components/Education';
// #endregion imports

const ResumePage = ({
    content,
    content: {
        contactInformation,
        skillsets,
        education,
        reading
    }
}) => {
    // #region timeline
    let timeline = [];
    const timelineItems = content.timelineItems;

    const createTimelineContent = (item) => {
        let timelineItem = (
            <TimelineItem
                jobTitle={item.jobTitle}
                companyName={item.companyName}
                companySite={item.companySite}
                location={item.location}
                timeFrame={item.timeFrame}
                bulletsContent={item.bullets}
            />
        );
        timeline.push(timelineItem);
    };
    
    timelineItems.forEach(item => createTimelineContent(item));
    // #endregion timeline

    return (
        <div>
            <Container className='py-5'>
                <ApplicantTitle 
                    profilePic={img_selfie} 
                    name={content.name}
                    jobTitle='Front End Developer // UX // UI'
                    textColor={'text-secondary'}
                />
                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <h2>Experience</h2>
                        {timeline}
                    </Col>
                    <Col lg={{span: 3, offset: 1}}>
                        <div id='contactSection' className='mb-5'>
                            <h2>Contact & Network</h2>
                            <div className='mt-3'>
                                <ContactItem icon={at_icon} content={contactInformation.email} />
                                <ContactItem icon={phone_icon} content={contactInformation.phoneNumber} />
                                <ContactItem icon={linkedin_icon} content={contactInformation.linkedIn} />
                                <ContactItem icon={github_icon} content={contactInformation.github} />
                                <ContactItem icon={house_icon} content={contactInformation.location} />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <h2 className='mb-4'>Skillsets</h2>
                            <SkillsSection content={skillsets.development} />
                            <SkillsSection content={skillsets.design} />
                            <SkillsSection content={skillsets.projectManagement} />
                        </div>
                        <EducationSection content={education} />
                        <SkillsSection content={reading} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ResumePage;