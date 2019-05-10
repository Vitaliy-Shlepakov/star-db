import React, {Component} from 'react';

import Header from '../header';
import Row from '../row';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';


import './app.css';
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from '../../services/swapi-service';
import {
    PersoneList,
    PlanetList,
    StarshipList,
    PersoneDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

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
                getImageUrl={getPersonImage}>

                <Record field = "gender" label="Geder"/>
                <Record field = "eyeColor" label="Eye Color"/>

            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails itemId={11}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field = "model" label="model"/>
                <Record field = "length" label="length"/>
                <Record field = "costInCredits" label="Cost"/>

            </ItemDetails>
        );

        return (
            <div className="stardb-app">
                <Header />

                <PersoneList>
                    { ({name}) => <span>{name}</span> }
                </PersoneList>

                <PlanetList>
                    { ({name}) => <span>{name}</span> }
                </PlanetList>

                    <StarshipList>
                        { ({name}) => <span>{name}</span> }
                    </StarshipList>

                <PersoneDetails itemId={11}/>
                <PlanetDetails itemId={5}/>
                <StarshipDetails itemId={2}/>

            </div>
        );
    };
}

