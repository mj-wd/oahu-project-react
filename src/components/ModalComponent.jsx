import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, CardImg , Card } from 'reactstrap';
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
            <Card>
                <CardImg outline onClick={this.toggleModal}src={HOMECARDS[0].image}>Open</CardImg>
            </Card>
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