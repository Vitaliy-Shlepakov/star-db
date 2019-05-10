import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService  = new SwapiService();
const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const PersoneList = withData(
    withChildFunction(ItemList,renderName),
    getAllPeople);

const PlanetList = withData(
    withChildFunction(ItemList,renderModelAndName),
    getAllPlanets);

const StarshipList = withData(
    withChildFunction(ItemList,renderModelAndName),
    getAllStarships);

export {
    PersoneList,
    PlanetList,
    StarshipList
};