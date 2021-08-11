import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Modal from './HomeCardModalComponent';


class Router extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/main' component={MainComponent} />
                    <Route path='/beaches' component={BeachesComponent} />
                    <Redirect to='/main' />
                </Switch>
                <Modal />
                <Footer />
            </div>
        );

    }
}
export default withRouter(Router);


