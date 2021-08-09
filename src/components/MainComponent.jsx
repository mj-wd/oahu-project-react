import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Modal1 from './ModalComponent'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // category = CATEGORY,
            // landmark = LANDMARK;
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Modal1/>
                <Footer />
            </div>
        );
    
    }


}

const mapStateToProps = state => {
    return {
        campsites: state.campsites,

    }
}


export default Main;