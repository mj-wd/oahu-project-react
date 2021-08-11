import React from 'react';
import { TOPATTRACTIONS } from '../shared/topAttractions';
import { Modal, ModalHeader, ModalBody, Button, Row, Col} from 'reactstrap';

function onAfterOpen({toggler, isOpen, arr}) {    

    return(
        <Modal className="modal-lg" isOpen={isOpen} toggler={toggler} >
                <ModalHeader>
                    <Button onClick={toggler}>
                        X Close
                    </Button>
                    <h2>Our Recommendations</h2>
                </ModalHeader>
                <ModalBody>
                    <>
                        {TOPATTRACTIONS.map(arr => {
                            return (
                                <ul key={arr.id}>
                                    <Row>
                                        <h3>{arr.name}</h3>
                                    </Row>
                                    <Row>
                                        <Col md={6}>                
                                            {arr.image}
                                        </Col>
                                        <Col md={6}>       
                                            <p>{arr.description}</p>
                                        </Col>
                                    </Row>
                                </ul>
                            )
                        })}
                    </>
                </ModalBody>
        </Modal>
    );
};

export default onAfterOpen;