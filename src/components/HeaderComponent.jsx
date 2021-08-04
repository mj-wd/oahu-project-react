import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Jumbotron, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Hello World!</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/img/oahu-road.jpg" height="30" width="30" alt="Hero"/></NavbarBrand>
                    </div>
                </Navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/Beaches">
                            <i className="fa fa-list fa-lg" /> Beaches
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/Culture">
                            <i className="fa fa-address-card fa-lg" /> Culture
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/Geography">
                            <i className="fa fa-address-card fa-lg" /> Geography
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/Restaurants">
                            <i className="fa fa-info fa-lg" /> Restaurants
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/Shopping">
                            <i className="fa fa-address-card fa-lg" /> Shopping
                        </NavLink>
                    </NavItem>
                </Nav>
            </>






        )
    }
}




export default Header;