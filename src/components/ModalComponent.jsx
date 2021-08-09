import React, { Component, TouchableOpacity } from 'react';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { HOMECARDS } from '../shared/home';
import { BEACHES } from '../shared/beaches';

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
            <Button outline><img src={HOMECARDS[0].image} style={{width:500,height:500}} onClick={this.toggleModal}/></Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>
                    <ModalBody>
                    <img src={BEACHES[0].image} style={{width:200,height:200}}/>
                    </ModalBody>
                </ModalHeader>
            </Modal>
            </>
        );
    };

}

export default Modal1;