import React from 'react';

//#region imports
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//#endregion imports

//#region component
const NavigationButton = ({
    text,
    callBack,
    link = '/'
}) => {
    return (
        <Link to={link}>
            <Button
                variant='dark'
                data-toggle='button'
                aria-pressed='false'
                type='button'
                className='NavigationButton d-flex align-items-center justify-content-center p-3 rounded-0'
                onClick={callBack}
            >
                {text}
            </Button>
        </Link>
    );
};
//#endregion component

export default NavigationButton;