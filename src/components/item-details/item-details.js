import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner/spinner'

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false,
    image: ''
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId){
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } =  this.props;
    if(!itemId) {
      return;
    }
    this.setState({
      loading: false
    });

    getData(itemId)
      .then((item) => {
        this.setState({
            item: item  ,
            loading: true,
            image: getImageUrl(itemId)
        });
      })
  };



  render() {
    const {loading, image} = this.state;
    const {item} =  this.state;

    if(!this.state.item) {
      return <span>Select a person from a list</span>;
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.item;

    if(loading){
      return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />

        <div className="card-body">
          <h4>{ name } {id}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
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


const Record = ({item, field, label}) => {

  return(
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
      </li>
  );
};

export {
  Record
};