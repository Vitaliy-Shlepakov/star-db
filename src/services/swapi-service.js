export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  getResource = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }


  //People
  getAllPeople = async() => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async(id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getPersonImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }


  //Planet
  getAllPlanets = async() => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet)
  };

  getPlanet = async(id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getPlanetImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/planet/${id}.jpg`
  }


  //StarShip
  getAllStarships = async() => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async(id) => {
    const starship =  await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getStarshipImage = (id) => {
    console.log(id);
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  };

  _transformPerson = (persone) => {
    return {
      id: this._extractId(persone),
      name: persone.name,
      gender: persone.gender,
      birthYear: persone.birthYear,
      eyeColor: persone.eyeColor,
    }
  };

}
