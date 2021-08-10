import React from 'react';
import { BEACHES } from '../shared/beaches';
import { Modal, ModalHeader, ModalBody, Button, Row, Col} from 'reactstrap';

const RenderCardModal = ({toggler, isOpen}) => {    

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
                    {BEACHES.map(id => {
                        return (
                            <ul key={BEACHES.id}>
                                <Row>
                                    <h3>{id.name}</h3>
                                </Row>
                                <Row>
                                    <Col md={6}>                
                                        {id.image}
                                    </Col>
                                    <Col md={6}>       
                                        <p>{id.description}</p>
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

export default RenderCardModal;  