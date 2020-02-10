import React, { Component } from 'react'

import dafaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero';

import { FaLinkedin} from 'react-icons/fa';


import {Link} from 'react-router-dom'

import {ProfileContext} from '../ProfilesContext'
import FooterPage from '../components/Footer';

// import "material/button/mdc-button";
// import '@material/react-button/dist/button.css';
// import Button from '@material/react-button';
import { MDBIcon, MDBBtn } from 'mdbreact';

export default class SingleProfile extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
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
        // console.log("profile is: "+profile.id);
        // console.log("state")
        if(!profile){
            return<div className="error"> 
                <h3>no such profile..</h3>
                <Link to='/profiles' className="btn-primary">
                Back to profiles
                </Link>
            </div>
        }

        const {nom, prenom, poste, pays, promo, entreprise_universite,
            filiere, ville,linkedIn, image, details, keywords} = profile;

        const mainImg = image;
        const defaultImg = "https://i.stack.imgur.com/l60Hf.png";
        return (
            <>
                <StyledHero img={mainImg?mainImg:defaultImg}>
                    <Banner title={`${prenom} ${nom}'s profile`}>
                        <Link to='/profiles' className="btn-primary">
                        Back to profiles
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {/*defaultImg.map((item,index) => {
                             return <img key={index} src={item} alt={nom}/>
                        })*/}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p className="title-profile-poste">{poste}</p>
                            <p>{details}</p>
                        </article>
                        <article className="info">
                            <h3>Infos</h3>
                            <h6>Promo: {promo}</h6>
                            <h6>Branch: {filiere}</h6>
                            <h6>Location: {
                            `${ville}, ${pays}`}
                            </h6>
                            <h6>Company/University: {entreprise_universite}</h6>
                            <h6  >
                                {/*<Button  >
                                    LinkedIn
                            </Button>*/}

                                <MDBBtn social="li" href={linkedIn}>
                                    <MDBIcon fab icon="linkedin-in" className="pr-1" /> 
                                        Linkedin
                                </MDBBtn>
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {keywords?keywords.split(",").map((item,index) => {
                    return <li key={index}>- {item}</li>
                    }):<h6>No keywords mentioned</h6>}
                </ul>
                </section>
                <FooterPage />
            </>
        )
    }
}
