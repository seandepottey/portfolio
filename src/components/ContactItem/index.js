import React from 'react';

import { Image } from 'react-bootstrap';

const ContactItem = ({
    icon,
    content
}) => {
    let text = content;
    let contentNode = <></>;

    const createContentNode = (text) => {
        return <p className='text-italic mb-0 ms-3'>{text}</p>;
    }

    if(typeof content === 'object') {
        text = content.value;
        if(content.link) {
            contentNode = <a href={content.link}>{createContentNode(text)}</a>;
        }
    } else {
        contentNode = createContentNode(text);
    }

    return (
        <div className='d-flex align-items-center mb-2'>
            <Image className='contact-item-icon' src={icon} />
            {contentNode}
        </div>
    );
};

export default ContactItem;