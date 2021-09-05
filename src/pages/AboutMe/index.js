import React from 'react';

// #region imports
// Components
import BasicContent from '../../components/BasicContent';

// Media
import img_selfie from '../../assets/profile-pic-small.jpg';
import img_raven from '../../assets/raven.jpg';
// #endregion imports

const AboutMePage = ({
    content
}) => {
    return (
        <div id='about-me-page'>
            <section id='personal-section'>
                <BasicContent
                    imageSrc={img_selfie}
                >

                </BasicContent>
            </section>
            <section id='raven-section'>
                <BasicContent
                    flip
                    imageSrc={img_raven}
                >

                </BasicContent>
            </section>
        </div>
    );
};

export default AboutMePage;