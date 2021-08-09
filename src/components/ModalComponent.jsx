/*import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

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
            <Button outline onClick={this.toggleModal}>Open</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </ModalHeader>
            </Modal>
            </>
        );
    };

}

export default Modal1;*/