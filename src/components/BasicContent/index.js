import React from 'react';

// #region imports
//Components
import { Container, Row, Col } from 'react-bootstrap';
// #endregion imports

const BasicContent = ({
    flip,
    imageSrc,
    text
}) => {
    const imageColumn = (
        <Col>
            <img src={imageSrc} />
        </Col>
    );

    const textColumn = (
        <Col>
            {text}
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
    text: <p>Basic Content component placeholder text.</p>
}

export default BasicContent;