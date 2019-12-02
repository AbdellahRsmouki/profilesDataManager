import React from 'react'

import defaultImg from '../images/room-1.jpeg';

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Profile({profile}) {
    console.log(profile);

    const {nom,prenom,id,promo,image} = profile;
    return (
        <article className="room">
            <div className="img-container">
                <img src={image} alt={defaultImg}/>
                <div className="price-top">
                    <p>promo {promo}</p>
                </div>  
                <Link to={`/profiles/${id}`} className="btn-primary room-link">
                    Details
                </Link>
            </div>
            <p className="room-info">{nom+"-"+prenom}</p>
        </article>
    )
}

Profile.propTypes = {
    profile:PropTypes.shape({
        nom:PropTypes.string.isRequired,
        prenom:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        promo:PropTypes.string.isRequired,
        // filiere:PropTypes.number.isRequired,

    })
}