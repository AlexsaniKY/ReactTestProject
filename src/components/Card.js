import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <span className="Card-title">
                    {this.props.title}
                </span>
                <div className="Card-innerCard">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;