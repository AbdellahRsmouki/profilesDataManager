import React, { Component } from 'react'

// import dafaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero';

import {Link} from 'react-router-dom'

import {CompaniesContext} from '../CompaniesContext'
import FooterPage from '../components/Footer';

import { MDBIcon, MDBBtn, MDBContainer} from 'mdbreact';


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
                <StyledHero img={mainImg}>
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
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{details}</p>
                        </article>
                        <article className="info">
                            <h3>Infos</h3>
                            <h6>Fondee en : {fondee}</h6>
                            <h6>size: {taille}</h6>
                            <h6>specialite: {specialite}</h6>
                            <h6>Location: {
                            `${ville}, ${pays}`}
                            </h6>
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
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                <h6>Keywords : </h6>
                <ul className="extras">
                    {keywords?keywords.split(",").map((item,index) => {
                        return  <li disabled="0" social="yt" key={index}> {item} </li>
                        }):<MDBBtn>No keywords mentioned</MDBBtn>}
                </ul>
                </section>
                <FooterPage />
            </>
        )
    }
}
