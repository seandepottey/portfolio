import React from 'react';

const SchoolInformation = ({
    schoolName,
    degree,
    focus,
    years,
    link
}) => {
    if(link) {
        schoolName = <a target='_blank' href={link}>{schoolName}</a>;
    }
    return(
        <div className='SchoolInformation'>
            <p>
                <span>{schoolName}</span>
                <span>{degree}:</span>
                <span>{focus}</span>
                <span className='years'>{years}</span>
            </p>
        </div>
    );
}

const EducationSection = ({content}) => {
    let schools = [];
    content.forEach(school => schools.push(SchoolInformation(school)));
    return (
        <div id='EducationSection'>
            <h2>Education</h2>
            {schools}        
        </div>
    );
};

export default EducationSection;