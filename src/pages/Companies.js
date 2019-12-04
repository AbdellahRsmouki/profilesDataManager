import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import CompaniesContainer from '../components/CompaniesContainer'
import { Link } from 'react-router-dom';
import FooterPage from '../components/Footer';

const Companies = () => {
    return (
        <>
            <Hero hero="companiesHero">
                <Banner title="Companies" >
                    <Link to='/' className="btn-primary">
                        return home 
                    </Link>
                </Banner>
            </Hero>
            <CompaniesContainer />
            <FooterPage />
        </>
    )
}

export default Companies;