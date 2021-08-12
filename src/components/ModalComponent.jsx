import React from 'react';
import { TOPATTRACTIONS } from '../shared/topAttractions';
import { Modal, ModalHeader, ModalBody, Button, Row, Col} from 'reactstrap';

function onAfterOpen({toggler, isOpen}) {    

    return(
        <Modal className="modal-lg" isOpen={isOpen} toggler={toggler} >
                <ModalHeader>
                    <Button onClick={toggler}>
                        X Close
                    </Button>
                    <h2>Our Top Recommendations</h2>
                </ModalHeader>
                <ModalBody>
                    <>
                        {TOPATTRACTIONS.map(arr => {
                            return (
                                <ul key={arr.id}>
                                <Row>
                                    <h3>Best {arr.category}</h3>
                                </Row>
                                <Row>
                                    <h3>{arr.name}</h3>
                                </Row>
                                <Row>
                                    <Col lg={6}>                
                                        {arr.image}
                                    </Col>
                                    <Col lg={6}>
                                        <p><q>{arr.description}</q></p>
                                        <a href={arr.citationLink} target='_blank' rel="noreferrer">source: {arr.source}</a>
                                    </Col>
                                </Row>
                            </ul>
                            )
                        })}
                    </>
                </ModalBody>
        </Modal>
    )
}

export default onAfterOpen;
