import React from 'react';

//#region imports
import { Navbar } from 'react-bootstrap';
import NavigationButton from './NavigationButton';
//#endregion imports

//#region component
const NavigationBar = ({}) => {
    return (
        <Navbar
            bg='dark'
            className={'d-flex justify-content-between p-0 shadow-sm'}
        >
            <NavigationButton
                text={'Sean DePottey'}
            />
            <div class='d-flex'>
                <NavigationButton
                    text={'Resume'}
                />
                <NavigationButton
                    text={'About Me'}
                />
            </div>
        </Navbar>
    );
};
//#endregion component

export default NavigationBar;