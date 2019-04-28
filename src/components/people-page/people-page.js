import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    state = {
        selectedPerson: 3
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {

        if(this.state.hasError){
            return console.log('error!!!')
        }
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (`${i.name} (${i.birthYear})`)}

            </ItemList>
        );
        const personDetails = (
            <ItemDetails personId={this.state.selectedPerson}/>
        )
        return (
            <ErrorBoundry>
                <Row left={itemList} rigth={personDetails}/>
            </ErrorBoundry>
        )
    }
};

