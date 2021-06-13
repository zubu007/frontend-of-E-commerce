import React from 'react'
import './Card.css'
import Rating from '@material-ui/lab/Rating';
import Yoga from './resources/yoga.jpg'

function Card(props) {
    return (
        <div className='card'>
            <img src={props.image} />
            <h2 className='card-name'>{props.name}</h2>
            <p className='card-description'>{props.description}</p>
            <p className='card-price'>{props.price}</p>
            <p className='card-category'>{props.category}</p>
            <Rating name="read-only" value={props.stars} readOnly />

            
        </div>
    )
}

export default Card
