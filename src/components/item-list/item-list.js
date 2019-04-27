import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: {
            birthYear: 12,
            eyeColor: 12,
            gender: "n/a",
            id: "2",
            name: "C-3PO"
        }
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
            .catch(console.log('DAS'))

    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick = {() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }

    render() {
    const { peopleList } = this.state;
        console.log(peopleList);
        const items = this.renderItems(Array.from(peopleList));
    if(!peopleList){
        return <Spinner/>
    }
    return (
      <ul className="item-list list-group">
          {items}
      </ul>
    );
  }
}