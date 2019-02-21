import React from 'react'
import './trumpCard.css'

const TrumpCard = props => {
    return (
    <div className="card">
        <img 
        className="card-img-top" 
        src={props.image} 
        alt={props.trump} 
        id={props.id}
        onClick={props.handleClick}
        />
    </div>
    )
}

export default TrumpCard;