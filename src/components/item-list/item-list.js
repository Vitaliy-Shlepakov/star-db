import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {


    state = {
        itemList: {

        }
    };

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })


    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.children(item);
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick = {() => this.props.onItemSelected(id)}
                    >
                    {item.name}{label}
                </li>
            )
        })
    }

    render() {
    const { itemList } = this.state;
    const items = this.renderItems(Array.from(itemList));

    if(!itemList){
        return <Spinner/>
    }
    return (
      <ul className="item-list list-group">
          {items}
      </ul>
    );
  }
}
