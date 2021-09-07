import React from 'react';

const SkillsSection = ({
    content,
    content: {
        header,
        value
    }
}) => {
    let skillsList = <p>{content.value}</p>;
    const createContentNodes = (item) => {
        console.log(item);
        if(item.subHeader) {
            let subheader = <h6 className='mb-1 text-secondary'>{item.subHeader}</h6>;
            skillsList.push(subheader);
        }
        let listNode = <p className=''>{item.value}</p>;
        skillsList.push(listNode);
    };

    const detectArray = Array.isArray(value);
    if(detectArray) {
        skillsList = [];
        value.forEach(item => createContentNodes(item));
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