import React from 'react';
import ItemDetails, { Record } from '../item-details';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPersonImage,
    getPlanet,
    getPlanetImage,
    getStarship,
    getStarshipImage
} = swapiService;

const PersoneDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImageUrl={getPersonImage}>
            <Record field = "gender" label="Gender"/>
            <Record field = "eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};
const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImageUrl={getPlanetImage}>
            <Record field = "population" label="Population"/>
            <Record field = "rotationPeriod" label="Rotation Period"/>
            <Record field = "diameter" label="Diameter"/>
        </ItemDetails>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                     getImageUrl={getStarshipImage}>
            <Record field = "model" label="model"/>
            <Record field = "length" label="length"/>
            <Record field = "costInCredits" label="Cost"/>

        </ItemDetails>
    );
};

export {
    PersoneDetails,
    PlanetDetails,
    StarshipDetails
};