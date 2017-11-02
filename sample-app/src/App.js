import React, {Component} from 'react';
import logo from './logo.svg';
import Rectangle from './Rectangle';
import constants from './constants.json';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: constants.colors,
            message: ''
        };
    }

    showMessage = () => {
        this.setState({message: 'The rectangle is yellow'});
    };

    shouldIDisplayTheMessage(currentRectangleState) {
        if (currentRectangleState.color === 'yellow')
            return true;
        return false;
    }

    hideMessage = () => {
        this.setState({message: ''});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Rectangle colors={this.state.colors} defaultColor="blue"
                           checkCondition={this.shouldIDisplayTheMessage}
                           takeAction={this.showMessage}
                           noAction={this.hideMessage}/>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default App;
