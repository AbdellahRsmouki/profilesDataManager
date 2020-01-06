import React, { Component } from 'react'

// import dafaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero';

import {Link} from 'react-router-dom'

import {CompaniesContext} from '../CompaniesContext'
import FooterPage from '../components/Footer';



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
                            <h6>Lieu: {
                            `{ville} au {pays}`}
                            </h6>
                            <h6>
                                <a href={site_web} className="title-linkedin-lien">site web</a>
                            </h6>
                            <h6>
                                <a href={linkedIn} className="title-linkedin-lien">LinkedIn</a>
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                <h6>Keywords : </h6>
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
