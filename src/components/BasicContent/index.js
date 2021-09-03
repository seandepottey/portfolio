import React from 'react';

// #region imports
//Components
import { Container, Row, Col, Image } from 'react-bootstrap';
// #endregion imports

const BasicContent = ({
    flip,
    imageSrc,
    text,
    height
}) => {
    const imageColumn = (
        <Col>
            <div className={`d-flex justify-content-center align-items-center ${height}`}>
                <div className='BasicContent--image-wrapper shadow'>
                    <Image rounded fluid src={imageSrc} />
                </div>
            </div>
        </Col>
    );

    const textColumn = (
        <Col>
            <div className={`d-flex align-items-center ${height}`}>
                {text}
            </div>
        </Col>
    );
    
    let columns = [imageColumn, textColumn];

    if(flip) {
        columns = [textColumn, imageColumn];
    }

    return(
        <div class='BasicContent'>
            <Container>
                <Row>
                    {columns}
                </Row>
            </Container>
        </div>
    );
};

BasicContent.defaultProps = {
    flip: false,
    imageSrc: '',
    text: <p>Basic Content component placeholder text.</p>,
    height: 'rh-6'
}

export default BasicContent;