import React from 'react';

//#region imports
import { Button } from 'react-bootstrap';
//#endregion imports

//#region component
const NavigationButton = ({
    text,
    callBack
}) => {
    return (
        <Button
            variant='dark'
            data-toggle='button'
            aria-pressed='false'
            className='d-flex align-items-center justify-content-center p-3 rounded-0'
            onClick={callBack}
        >
            {text}
        </Button>
    );
};
//#endregion component

export default NavigationButton;