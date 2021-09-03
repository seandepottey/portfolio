import React from 'react';

// #region imports
// Components
import BasicContent from '../../components/BasicContent';

// Media
import Selfie from '../../assets/profile-pic-small.jpg';
import Raven from '../../assets/raven.jpg';
// #endregion imports

const AboutMePage = () => {
    return (
        <div id='about-me-page'>
            <section id='personal-section'>
                <BasicContent
                    imageSrc={Selfie}
                >

                </BasicContent>
            </section>
            <section id='raven-section'>
                <BasicContent
                    flip
                    imageSrc={Raven}
                >

                </BasicContent>
            </section>
        </div>
    );
};

export default AboutMePage;