import React, { Component } from 'react'

import defaultImg from '../images/profile_background.png'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero';

import {Link} from 'react-router-dom'

import {ProfileContext} from '../ProfilesContext'
import FooterPage from '../components/Footer';

import { MDBIcon, MDBBtn, MDBContainer} from 'mdbreact';
import { Card} from 'react-bootstrap';

// import "material/button/mdc-button";
// import '@material/react-button/dist/button.css';
// import Button from '@material/react-button';
export default class SingleProfile extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
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
        return (
            <>
                <StyledHero img={defaultImg}>
                    <Banner title={`${prenom} ${nom}'s profile`}>
                        <Link to='/profiles' className="btn-primary">
                        Back to profiles
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                    </div>
                    <div className="single-room-info">
                        <article className="desc big-card-margin-top">
                            <h3>Details</h3>
                            <p className="title-profile-poste">{poste}</p>
                            <p>{details}</p>
                        </article>
                        <article className="info">
                        <Card style={{ width: '30rem' ,padding: '5px'}}>
                            {/*<Card.Img variant="top" src={mainImg} onError={defaultImg}/>*/}
                            <Card.Img variant="top" src={defaultImg}/>
                            <Card.Body>
                                <Card.Title>Infos</Card.Title>
                                <Card.Text>
                                <h6>Promo: {promo}</h6>
                                <h6>Branch: {filiere}</h6>
                                <h6>Location: {
                                `${ville}, ${pays}`}
                                </h6>
                            <h6>Company/University: {entreprise_universite}</h6>
                                </Card.Text>
                                <ul className="links">
                                    <MDBContainer>
                                        <MDBBtn social="li" href={linkedIn}>
                                            <MDBIcon fab icon="linkedin-in" className="pr-1" /> 
                                                Linkedin
                                        </MDBBtn>
                                    </MDBContainer>
                                </ul>
                            </Card.Body>
                        </Card>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {keywords?keywords.split(",").map((item,index) => {
                    return <MDBBtn outline color="default" disabled="true" rounded size="sm" type="submit" className="mr-auto" key={index}>
                                    {item}
                            </MDBBtn>
                    }):<MDBBtn outline color="danger" disabled="true" rounded size="sm" type="submit" className="mr-auto">No keywords mentioned</MDBBtn>}
                </ul>
                </section>
                <FooterPage />
            </>
        )
    }
}
