import React, { Component } from 'react';
import dafaultImg from '../images/company_background.jpg'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero';

import {Link} from 'react-router-dom'

import {CompaniesContext} from '../CompaniesContext'
import FooterPage from '../components/Footer';

import { MDBIcon, MDBBtn, MDBContainer} from 'mdbreact';

import { Card } from 'react-bootstrap';


export default class SingleCompany extends Component {
    constructor(props){
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
        }
    }

    static contextType = CompaniesContext;

    // componentDidMount(){}
    render() {
        const {getCompany} = this.context;
        const company = getCompany(this.state.slug);
        // console.log(profile);
        if(company === "No company found"){
            return<div className="error"> 
                <h3>no such company..</h3>
                <Link to='/companies' className="btn-primary">
                Back to companies
                </Link>
            </div>
        }

        const {nom, details, specialite, site_web, fondee, ville,
            pays, linkedIn, image,id, taille, keywords} = company;

        const mainImg = image;
        return (
            <>
                <StyledHero img={dafaultImg}>
                    <Banner title={`${nom}`}>
                        <Link to='/companies' className="btn-primary">
                        Back to companies
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {/*defaultImg.map((item,index) => {
                             return <img key={index} src={item} alt={name}/>
                        })*/}
                    </div>
                    <div className="single-room-info">
                        <article className="desc big-card-margin-top">
                            <h3>Details</h3>
                            <p>{details}</p>
                        </article>
                        <article className="info">
                        <Card style={{ width: '30rem' ,padding: '5px'}}>
                            <Card.Img variant="top" src={mainImg} alt="holder.js/100x180?auto=yes" />
                            <Card.Body>
                                <Card.Title>Infos</Card.Title>
                                <Card.Text>
                                    <h6>Fondee en : {fondee}</h6>
                                    <h6>size: {taille}</h6>
                                    <h6>specialite: {specialite}</h6>
                                    <h6>Location: {
                                    `${ville}, ${pays}`}
                                    </h6>
                                </Card.Text>
                                <ul className="links">
                                    <MDBContainer>
                                        <MDBBtn social="comm" href={site_web}>
                                            <MDBIcon icon="comments" className="pr-1" /> SiteWeb
                                        </MDBBtn>
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
                <h6>Keywords : </h6>
                <ul className="extras">
                    {keywords?keywords.split(",").map((item,index) => {
                        return  <MDBBtn outline color="default" disabled="true" rounded size="sm" type="submit" className="mr-auto" key={index}>
                                     {item}
                                </MDBBtn>
                        }):<MDBBtn outline color="default" disabled="true" rounded size="sm" type="submit" className="mr-auto">No keywords mentioned</MDBBtn>}
                </ul>
                </section>
                <FooterPage />
            </>
        )
    }
}
