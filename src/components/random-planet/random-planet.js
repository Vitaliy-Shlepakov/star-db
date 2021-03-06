import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  };

  componentWillUnmount(){
    clearInterval(this.interval);
  };

  state = {
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null
    },
    loading: true
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = (err) => {

  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15) +3;
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  }

  componentWillMount() {
    this.updatePlanet()
  }

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <PlaneView planet={planet}/> : null;

      return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
      );

  }
}

const PlaneView = ({planet}) => {
  const { id, name, population, rotationPeriod, diameter} = planet;

  return (
      <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
      );
  }


