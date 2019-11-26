import React from 'react'

import defaultImg from '../images/room-1.jpeg';

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Company({company}) {
    // console.log();
    const {name,images,slug,price} = company;
    return (
        <article className="room">
            <div className="img-container">
            <img src={images[0] || defaultImg}/>
            <div className="price-top">
            <h6>{price}</h6>
            <p>promo</p>
            </div>
            <Link to={`/companies/${slug}`} className="btn-primary room-link">
                Details
            </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Company.propTypes = {
    company:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}