import React, {Component} from 'react';


class Rectangle extends Component {

    constructor(props) {
        super(props);
        this.state = {color: props.defaultColor};
    }

    changeColor = () => {
        let currentIndex = this.props.colors.indexOf(this.state.color);

        if (currentIndex < this.props.colors.length - 1)
            currentIndex++;
        else
            currentIndex = 0;

        this.setState({color: this.props.colors[currentIndex]});

        if (this.props.checkCondition({color: this.props.colors[currentIndex]}))
            this.props.takeAction();
        else
            this.props.noAction();
    };

    render() {
        return ( <div className={'rectangle ' + this.state.color} onClick={this.changeColor}>

        </div>);
    }
}

export default Rectangle;