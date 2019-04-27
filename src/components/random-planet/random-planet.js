import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet()
  }

  state = {
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null
    }
  };

  onPlanetLoaded = (planet) => {
    this.setState({planet});
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded);
  }

  componentWillMount() {
    this.updatePlanet()
  }

  render() {
    const { planet } = this.state;
    const { id, name, population, rotationPeriod, diameter} = planet;
    console.log(planet);

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
