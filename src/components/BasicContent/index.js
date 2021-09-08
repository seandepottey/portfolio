import React from 'react';

// #region imports
// Hooks
import { useWindowSize } from '../../js/hooks';
// Components
import { Container, Row, Col, Image } from 'react-bootstrap';
// #endregion imports

/*
    Component documentation at bottom of the file

*/

const BasicContent = ({
    flip,
    imageSrc,
    height,
    imageCol,
    contentCol,
    children
}) => {
    let windowWidth = useWindowSize().width;
    let lineBreak = <></>;

    if(windowWidth <= 576) {
        lineBreak = <hr style={{width: '80%'}} />
    }

    const imageColumn = (
        <Col
            key='imageCol'
            {...imageCol}
            xs={12}
            >
            <div className={`d-flex justify-content-center align-items-center mb-2 mb-sm-0 ${height} py-3`}>
                <div className='BasicContent--image-frame position-relative'>
                    <div className='Image-offset' />
                    <div className='Image-wrapper'>
                        <Image className='position-relative' rounded fluid src={imageSrc} />
                    </div>
                </div>
            </div>
        </Col>
    );

    const textColumn = (
        <Col
            key='textCol' 
            {...contentCol}
            xs={10}
            >
            <div className={`d-flex align-items-center mb-5 mb-md-4 mb-lg-0 ${height} py-3`}>
                {children}
            </div>
        </Col>
    );
    
    let columns = [imageColumn, textColumn];

    if(flip) {
        columns = [textColumn, imageColumn];
    }

    return(
        <div className='BasicContent'>
            <Container>
                <Row className={'justify-content-center'}>
                    {columns}
                    {lineBreak}
                </Row>
            </Container>
        </div>
    );
};

BasicContent.defaultProps = {
    flip: false,
    imageSrc: '',
    text: <p>Basic Content component placeholder text.</p>,
    height: 'rh-2 rh-lg-6'
}

export default BasicContent;

/*
    @prop imageCol: passed as object written as Column properties

*/