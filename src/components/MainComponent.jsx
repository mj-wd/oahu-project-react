import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Modal from './HomeCardModalComponent'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Modal/>
                <Footer />
            </div>
        );
    
    }
}
export default Main;