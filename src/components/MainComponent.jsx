import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Beaches from './BeachesComponent';
import Traditions from './TraditionsComponent';
import Restaurants from './RestaurantComponent';
import Footer from './FooterComponent';
import Shopping from './ShoppingComponent';
import Siteseeing from './SightseeingComponent';

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
                <Route path='/home' component={HomePage} />
                <Route exact path='/beaches' component={Beaches} />
                <Route exact path='/traditions' component={Traditions} />
                <Route exact path='/sightseeing' component={Siteseeing} />
                <Route exact path='/restaurants' component={Restaurants} />
                <Route exact path='/shopping' component={Shopping} />
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;