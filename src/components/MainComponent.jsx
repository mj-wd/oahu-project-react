import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Beaches from './BeachesComponent';
import Traditions from './TraditionsComponent';
import Restaurants from './RestaurantComponent';
import Footer from './FooterComponent';
import Shopping from './ShoppingComponent';
import SiteSeeing from './SightSeeingComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const HomePage = () => {
        return (
            <Home />
        );
    }
        
        return (
            <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/beaches' component={Beaches} />
                <Route path='/traditions' component={Traditions} />
                <Route path='/sight-seeing' component={SiteSeeing} />
                <Route path='/restaurants' component={Restaurants} />
                <Route path='/shopping' component={Shopping} />
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;