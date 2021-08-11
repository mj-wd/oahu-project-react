import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';



// const RenderCardModal = ({toggler, images, homeCard, isOpen}) => {
//     return(
//         <Modal className="modal-lg" isOpen={isOpen} toggler={toggler}>
//             <ModalHeader>
//                 <ModalBody>
//                     <img src={homeCard[0].images[0]} style={{width:200,height:200}}/>
//                     <Button onClick={toggler}>X</Button>
//                 </ModalBody>
//             </ModalHeader>
//         </Modal>
//     );
// };

// function RenderModal({toggler, homeCards, isOpen}) {
//     const renderModal = homeCards.map(homeCard => {
//         return(
//             <RenderCardModal key={homeCard.id} homeCard={homeCard} images={homeCard.images} toggler={toggler} isOpen={isOpen} />
//         );
//     });
//         return(
//             <div>
//                 {renderModal}
//             </div>
//         );
// }

function RenderCardModal({toggler, homeCard, isOpen}) {
    return(
        <Modal className="modal-lg" isOpen={isOpen} toggler={toggler}>
            <ModalHeader>
                <ModalBody>
                    <img src={homeCard.id.images} style={{ width: 200, height: 200 }} />
                    <Button onClick={toggler}>X</Button>
                </ModalBody>
            </ModalHeader>
        </Modal>
    )
}

function RenderModal({toggler, homeCards, isOpen}) {
    const renderModal = homeCards.map(homeCard => {
        return(
            <RenderCardModal key={homeCard.id} homeCard={homeCard} images={homeCard.images} toggler={toggler} isOpen={isOpen} />
        );
    });
        return(
            <div>
                {renderModal}
            </div>
        );
}



export default RenderModal;

