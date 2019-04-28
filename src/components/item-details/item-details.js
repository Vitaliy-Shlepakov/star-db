import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner/spinner'

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false,
    image: ''
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId){
      this.updatePerson()
    }
  }

  updatePerson() {
    const { itemId, getData, getImageUrl } =  this.props;
    if(!itemId) {
      return;
    }
    this.setState({
      loading: false
    });
    getData(itemId)

      .then((person) => {
        this.setState({
            person,
            loading: true,
            image: getImageUrl(itemId)
        });
      })
  };



  render() {
    const {loading, image} = this.state;
    if(!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.person;

    if(loading){

    return (

      <div className="person-details card">
        <img className="person-image"
          src={image} />

        <div className="card-body">
          <h4>{ name } {id}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )}else{
      return (
          <Spinner/>
        )
    }
  }
}
