import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Modals from './HomeModalImageLinks'

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
                <Modals/>
                <Footer />
            </div>
        );
    
    }
}
export default Main;