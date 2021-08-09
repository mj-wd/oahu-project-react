import React, { Component, TouchableOpacity } from 'react';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { HOMECARDS } from '../shared/home';

class Modal1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
            <>
            <Button outline><img src={HOMECARDS[0].image} onClick={this.toggleModal}/>Test</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>
                    <ModalBody>
                        text
                    </ModalBody>
                </ModalHeader>
            </Modal>
            </>
        );
    };

}

export default Modal1;