import React from 'react';
import { BEACHES } from '../shared/beaches';
import { RESTAURANTS } from '../shared/restaurants'
import { Modal, ModalHeader, ModalBody, Button, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';


// export const initialState = {
//     beaches: BEACHES,
//     restaurants: RESTAURANTS
// }

function onAfterOpen({toggler, isOpen}) {    

    return(
        <Modal className="modal-lg" isOpen={isOpen} toggler={toggler} >
            {/* <Link to={`/beaches/${BEACHES.id}`}> */}
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