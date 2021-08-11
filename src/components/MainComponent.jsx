import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Modal from './HomeCardModalComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

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
export default withRouter(Main);