import React from 'react'

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Company({company}) {
    // console.log();
    const {nom,image,id} = company;
    return (
        <article className="room">
            <div className="img-container">
            <img src={image}/>
            <div className="price-top">
            <p>nbr ensiast</p>
            </div>
            <Link to={`/companies/${nom}`} className="btn-primary room-link">
                Details
            </Link>
            </div>
            <p className="room-info">{nom}</p>
        </article>
    )
}

Company.propTypes = {
    company:PropTypes.shape({
        nom:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
    })
}