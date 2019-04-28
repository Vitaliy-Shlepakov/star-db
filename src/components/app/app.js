import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';


import './app.css';

export default class App extends Component {

    state= {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: true
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };


    render() {

        if(this.state.hasError) {
            return alert('Something has gone terribly! Update page!')
        }
        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <button
                    className="toggle-planet btn btn-info btn-lg"
                    onClick={this.toggleRandomPlanet}
                >Toggle Random Planet</button>

                <PeoplePage/>
            </div>
        );
    };
}

