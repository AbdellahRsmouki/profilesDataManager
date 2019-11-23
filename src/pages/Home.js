import React from 'react'

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedProfiles from '../components/FeaturedProfiles';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="ENSIAS PROFILES" 
                        subtitle="Get useful data from the best community">
                    <Link to='/profiles' className="btn-primary">
                        See some profiles
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedProfiles />
        </>
    )
}

