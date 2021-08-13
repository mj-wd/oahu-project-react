import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Jumbotron, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                                <h2>Welcome To Our Website</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light static="top" expand="md" >
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="m-auto">
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/beaches">
                                        <i className="fa fa-sun-o  fa-lg" /> Beaches
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/traditions">
                                        <i className="fa fa-clock-o  fa-lg" /> Traditions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/sightseeing">
                                        <i className="fa fa-binoculars fa-lg" /> Sightseeing
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/restaurants">
                                        <i className="fa fa-cutlery fa-lg" /> Restaurants
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/shopping">
                                        <i className="fa fa-cart-plus fa-lg" /> Shopping
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