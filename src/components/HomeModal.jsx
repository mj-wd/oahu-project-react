import React, { Component } from 'react';
import { HOMECARDS } from '../shared/home';
import { BEACHES } from '../shared/beaches';
import { RESTAURANTS } from '../shared/restaurants';
import RenderButton from './ButtonComponent';
import RenderModal from './ModalComponent';

class HomeModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            beaches: BEACHES,
            homeCards: HOMECARDS,
            restaurants: RESTAURANTS
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

export default HomeModal;