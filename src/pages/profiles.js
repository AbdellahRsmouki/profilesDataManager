import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ProfilesContainer from '../components/ProfilesContainer'
import { Link } from 'react-router-dom';
const profiles = () => {
    return (
        <>
            <Hero hero="profilesHero">
                <Banner title="Profiles" >      
                    <Link to='/' className="btn-primary">
                        return home 
                    </Link>
                </Banner>
            </Hero>
            <ProfilesContainer />
        </>
    )
}

export default profiles;
