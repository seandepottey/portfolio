import React from 'react';

// #region imports
// Components
import { Container, Row, Col } from 'react-bootstrap';
import ApplicantTitle from '../../components/Applicant Title';

// Media
import img_selfie from '../../assets/profile-pic-small.jpg';
import TimelineItem from '../../components/TimelineItem';
// #endregion imports

const ResumePage = ({
    content
}) => {
    // #region timeline
    let timeline = [];
    const timelineItems = content.timelineItems;

    const createTimelineContent = (item) => {
        let bullets = [];
        
        const createTimelineBullet = (bulletContent) => {
            const bullet = (
                <li>{bulletContent.value}</li>
            );
            bullets.push(bullet);
        };

        const timelineItemBullets = item.bullets;
        timelineItemBullets.forEach(bullet => createTimelineBullet(bullet));
        let list = (
            <ul>
                {bullets}
            </ul>
        );

        let timelineItem = (
            <TimelineItem
                companyName={item.jobTitle}
                jobTitle={item.companyName}
                location={item.location}
                timeFrame={item.timeFrame}
                experienceItem={list}
            />
        );
        console.log(timeline);
        timeline.push(timelineItem);
    };
    
    timelineItems.forEach(item => createTimelineContent(item));
    // #endregion timeline

    return (
        <div>
            <Container className='py-5'>
                <Row className='justify-content-center'>
                    <Col md={10}>
                        <ApplicantTitle 
                            profilePic={img_selfie} 
                            name={content.name}
                            jobTitle='Front End Developer // UX // UI'
                            textColor={'text-secondary'}
                        />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        {timeline}
                    </Col>
                    <Col xs={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ResumePage;