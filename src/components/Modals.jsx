import React, { Component } from 'react';
import { HOMECARDS } from '../shared/home';
import RenderButton from './ButtonComponent';
import RenderModal from './ModalComponent';

class Modals extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            homeCards: HOMECARDS,
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

export default Modals;