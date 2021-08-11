import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Jumbotron, NavLink, Collapse, NavbarToggler } from 'reactstrap';



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
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Hello Oah'u!</h1>
                                <h2>Random Text</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/Beaches">
                                        <i className="fa fa-list fa-lg" /> Beaches
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/Culture">
                                        <i className="fa fa-address-card fa-lg" /> Culture
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/Geography">
                                        <i className="fa fa-address-card fa-lg" /> Geography
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/Restaurants">
                                        <i className="fa fa-info fa-lg" /> Restaurants
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/Shopping">
                                        <i className="fa fa-address-card fa-lg" /> Shopping
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>

        );
    };
}

export default Header;