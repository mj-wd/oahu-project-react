import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Modal1 from './ModalComponent';


class Header extends Component {
    constructor(props) {
        super(props);


        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Hello Oah'u!</h1>
                                <h2>Random Text</h2>
                            </div>
                        </div>
                    </div>
                    <Modal1></Modal1>
                </Jumbotron>
            </>
        );
    };
}




export default Header;