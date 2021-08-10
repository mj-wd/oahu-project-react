import React from 'react';
import Modals from './Modals';
import { BEACHES } from '../shared/beaches';
import { RESTAURANTS } from '../shared/restaurants';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const RenderCardModal = ({toggler, isOpen, homeCards}) => {
    
    if(homeCards.category === 'beaches') {

        return(
            <Modal className="modal-lg" isOpen={isOpen} toggler={toggler} >
                <ModalHeader>
                    <Button onClick={toggler}>
                            X Close
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <>
                        {BEACHES.map(id => {
                            return (
                                <ul key={BEACHES.id}>
                                    {id.image}
                                    <br/>
                                    {id.description}
                                </ul>
                            )
                        })}
                    </>
                </ModalBody>
            </Modal>
        );

    } else {
        
        return(
            <Modal className="modal-lg" isOpen={isOpen} toggler={toggler} homeCards={homeCards}>
                <ModalHeader>
                    <ModalBody>
                        <Button onClick={toggler}>
                            X Close
                        </Button>
                        <>
                            {RESTAURANTS.map(homeCard => {
                                return (
                                    <ul key={RESTAURANTS.id}>
                                        {RESTAURANTS.image}
                                        <br/>
                                        {RESTAURANTS.description}
                                    </ul>
                                )
                            })}
                        </>
                    </ModalBody>
                </ModalHeader>
            </Modal>
        );
    }
};

export default RenderCardModal;  