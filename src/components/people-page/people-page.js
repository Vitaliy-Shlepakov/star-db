import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    state = {
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
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
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender}) => `${name} (${gender})`}
            />
        );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )
        return (
            <Row left={itemList} rigth={personDetails}/>
        )
    }
};

const Row = (props) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                { props.left }
            </div>
            <div className="col-md-6">
                { props.rigth }
            </div>
        </div>
        )
};
