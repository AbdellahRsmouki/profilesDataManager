import React, { Component } from 'react'

import dafaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero';

import {Link} from 'react-router-dom'

import {ProfileContext} from '../Context'



export default class SingleCompany extends Component {
    constructor(props){
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            dafaultBcg
        }
    }

    static contextType = ProfileContext;

    // componentDidMount(){}
    render() {
        const {getProfile} = this.context;
        const profile = getProfile(this.state.slug);
        // console.log(profile);
        if(!profile){
            return<div className="error"> 
                <h3>no such profile..</h3>
                <Link to='/profiles' className="btn-primary">
                Back to profiles
                </Link>
            </div>
        }

        const {name, description, capacity, size, price, extras,
            breakfast, pets, images} = profile;

        const [mainImg,...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner title={`${name} profile`}>
                        <Link to='/profiles' className="btn-primary">
                        Back to profiles
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item,index) => {
                             return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Infos</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: ${size}</h6>
                            <h6>max capacity: {
                            capacity>1? `${capacity} people`:
                                        `${capacity} person`}
                            </h6>
                            <h6>{
                            pets? `pets allowed`:
                                        `no pets allowed`}
                            </h6>
                            <h6>{
                            breakfast &&  "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                    return <li key={index}>- {item}</li>
                    })}
                </ul>
                </section>
            </>
        )
    }
}
