import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="Card-innerCard">
                    <span className="Card-title">
                        {this.props.title}
                    </span>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;