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
                    imageCol={{
                        lg: {
                            span: 3
                        },
                        md: {
                            
                        },
                        sm: {
                            span: 3
                        }
                    }}
                    contentCol={{
                        lg: {
                            offset: 1,
                            span: 5
                        },
                        sm: {
                            offset: 0,
                            span: 9
                        }
                    }}
                >
                    <span>
                        <h2>About Me</h2>
                        <p>{content.personalOverview.value}</p>
                    </span>
                </BasicContent>
            </section>
            <section id='raven-section'>
                <BasicContent
                    // flip
                    imageSrc={img_raven}
                    imageCol={{
                        lg: {
                            span: 3,
                            offset: 1,
                            order: 2
                        },
                        sm: {
                            span: 3,
                            order: 1
                        }
                    }}
                    contentCol={{
                        lg: {
                            span: 5,
                            order: 1
                        },
                        sm: {
                            offset: 0,
                            span: 9,
                            order: 2
                        }
                    }}
                >
                    <span>
                        <h2>The Pup</h2>
                        <p>{content.ravenSection.value}</p>
                    </span>
                </BasicContent>
            </section>
        </div>
    );
};

export default AboutMePage;