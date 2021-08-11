import React, { Component } from 'react';
import Modal from './HomeCardModalComponent';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h2>We rounded up our top picks for the island's best things to do.</h2>
                <h3>Click the pic below to dig into Oahu's best!</h3>
                <Modal/>
            </div>
        );    
    }
}
export default Home;