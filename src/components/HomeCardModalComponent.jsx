import React, { Component } from 'react';
import { HOMECARD } from '../shared/home';
import RenderButton from './HomeCardButtonComponent';
import RenderModal from './ModalComponent';

class Modal extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            homeCards: HOMECARD,
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
                <RenderModal isOpen={this.state.isModalOpen} toggler={this.toggleModal} homeCards={this.state.homeCards}/>
            </>
        );
    };
}

export default Modal;  