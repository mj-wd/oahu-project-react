import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { HOMECARDS } from '../shared/home';
import { BEACHES } from '../shared/beaches';
import RenderButton from './ButtonComponent'

class HomeModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            beaches: BEACHES,
            homeCards: HOMECARDS
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }



    render(){
        return(
            <>
            <RenderButton toggler={this.toggleModal} homeCards={this.state.homeCards} />
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

export default HomeModal;