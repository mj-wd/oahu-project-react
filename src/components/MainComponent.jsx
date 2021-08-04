import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category = CATEGORY;
            landmark = LANDMARK;
        };
    }

    render() {
        // Render code will go here if needed
    };

    return (
        <div>
            <Header />
            // The meat and potatoes of this project will go here... eventually. :)
            <Footer />
        </div>
    );

}

export default Main;