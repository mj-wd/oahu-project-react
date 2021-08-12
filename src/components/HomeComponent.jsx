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
                <h3>Aloha! Welcome to The Hawaii Bros' Official Oah'u Vacation Planner.</h3>
                <p>Do you want to maximize the fun factor on your next visit to this majestical island? Well, bruh, you've come to the right place!</p>
                <p>Other sites bombard you with so many things to do that'll it make your head spin. We want you to just chill, relax, and have no worries. So we've picked the absolute top three things from each of the most popular categories. Trust us, one of us lives here.</p>
                <p>Go ahead and surf the links above or click on the pic below for our #1s if you only have like one weekend or something for your visit.</p>
                <Modal/>
            </div>
        );    
    }
}
export default Home;