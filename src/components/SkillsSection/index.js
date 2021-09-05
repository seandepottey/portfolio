import React from 'react';

const SkillsSection = ({
    content: {
        header,
        value
    }
}) => {
    const detectArray = Array.isArray(value);
    if(detectArray) {
        value.forEach(
            
        );
    }

    return (
        <div className='SkillsSection'>
            <h3 className='mb-3'>{header}</h3>
            <p></p>
        </div>
    );
};

export default SkillsSection;