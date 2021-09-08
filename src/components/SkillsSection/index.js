import React from 'react';

const SkillsSection = ({
    content,
    content: {
        header,
        value
    }
}) => {
    let skillsList = [];
    const createContentNodes = (item) => {
        if(item.subHeader) {
            let subheader = <h6 className='mb-1 text-secondary'>{item.subHeader}</h6>;
            skillsList.push(subheader);
        }
        let listNode = <p>{item.value}</p>;
        skillsList.push(listNode);
    };

    const detectArray = Array.isArray(value);
    if(detectArray) {
        skillsList = [];
        value.forEach(item => createContentNodes(item));
    } else {
        createContentNodes(content);
    }

    return (
        <div className='SkillsSection mb-5'>
            <h3 className='mb-3'>{header}</h3>
            <div className='SkillsList fst-italic'>
                {skillsList}
            </div>
        </div>
    );
};

export default SkillsSection;