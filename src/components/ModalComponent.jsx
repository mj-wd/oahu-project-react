import React from 'react';
import { BEACHES } from '../shared/beaches';
import { RESTAURANTS } from '../shared/restaurants'
import { Modal, ModalHeader, ModalBody, Button, Row, Col} from 'reactstrap';
import { Link, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

function onAfterOpen({toggler, isOpen, arr}) {    

    return(
        <Modal className="modal-lg" isOpen={isOpen} toggler={toggler} >
            {/* <Link to={`${BEACHES.id}`}> */}
                <ModalHeader>
                    <Button onClick={toggler}>
                        X Close
                    </Button>
                    <h2>Our Recommendations</h2>
                </ModalHeader>
                <ModalBody>
                    <>
                        {BEACHES.map(arr => {
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
            {/* </Link> */}
        </Modal>
    );
};

export default onAfterOpen;