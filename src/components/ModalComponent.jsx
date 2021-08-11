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
                    <h2>Our Top Recommendations</h2>
                </ModalHeader>
                <ModalBody>
                    <>
                        {TOPATTRACTIONS.map(arr => {
                            return (
                                <ul key={arr.id}>
                                    <Row>
                                        <h3>Best {arr.category}:&nbsp;</h3>
                                        <h3>{arr.name}</h3>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>                
                                            {arr.image}
                                        </Col>
                                        <Col lg={6}>       
                                            <p><q>{arr.description}</q></p>
                                            <p>source:&nbsp;{arr.citation}</p>
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
