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
                <h2>We rounded up our top picks for the island's best things to do.</h2>
                <h3>Click the pic below to dig into Oahu's best!</h3>
                <Modal/>
                <Footer />
            </div>
        );
    
    }
}
export default Main;