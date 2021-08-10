import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';



const RenderCardModal = ({toggler, id, images, isOpen}) => {
    return(
        <Modal className="modal-lg" isOpen={isOpen} toggler={toggler}>
            <ModalHeader>
                <ModalBody>
                    <img src={id.images} style={{width:200,height:200}}/>
                    <Button onClick={toggler}>X</Button>
                </ModalBody>
            </ModalHeader>
        </Modal>
    );
};

function RenderModal({toggler, homeCards, isOpen}) {
    const renderModal = homeCards.map(homeCard => {
        return(
            <RenderCardModal key={homeCard.id} homeCard={homeCard} images={homeCard} toggler={toggler} isOpen={isOpen} />
        );
    });
        return(
            <div>
                {renderModal}
            </div>
        );
}



export default RenderModal;

