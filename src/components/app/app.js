import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';


import './app.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    swapiService = new SwapiService();

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
                    >
                    Toggle Random Planet</button>

                <PeoplePage/>

                {/*<div className="row mt2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelected}*/}
                {/*            getData={this.swapiService.getAllPlanets}*/}
                {/*            renderItem={(item) => item.id}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId={this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        );
    };
}

