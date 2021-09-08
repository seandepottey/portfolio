import React from 'react';

//#region imports
import { Navbar } from 'react-bootstrap';
import NavigationButton from './NavigationButton';
//#endregion imports

//#region component
const NavigationBar = ({
    navPaths
}) => {
    return (
        <Navbar
            bg='dark'
            className={'NavigationBar d-flex justify-content-between p-0 shadow-sm'}
        >
            <NavigationButton
                text={'Sean DePottey'}
            />
            <div className='d-flex'>
                <NavigationButton
                    text={'Resume'}
                    link={navPaths['resumePage']}
                />
                <NavigationButton
                    text={'About Me'}
                    link={navPaths['aboutMePage']}
                />
            </div>
        </Navbar>
    );
};
//#endregion component

export default NavigationBar;