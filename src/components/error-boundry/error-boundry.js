import React, { Component } from 'react';

export default class ErrorBoundry extends Component{

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };

    render(){
        if(this.state.hasError) return console.log('Error!!!')
        return this.props.children;
    }
}
