import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeModal from './HomeModal'

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
                <HomeModal/>
                <Footer />
            </div>
        );
    
    }
}
export default Main;