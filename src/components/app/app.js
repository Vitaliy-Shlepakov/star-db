import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Row from '../row';


import './app.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    swapiService = new SwapiService();

    state= {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };


    render() {

        const { getPerson, getStarship , getPersonImage, getStarshipImage} = this.swapiService;

        if(this.state.hasError) {
            return alert('Something has gone terribly! Update page!')
        }

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );
        const starshipDetails = (
            <ItemDetails itemId={11}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        );

        return (
            <div className="stardb-app">
                <Header />
                {/*<RandomPlanet />*/}
                {/*<PeoplePage/>*/}

                <Row
                    left={personDetails}
                    rigth={starshipDetails}>
                </Row>

            </div>
        );
    };
}

