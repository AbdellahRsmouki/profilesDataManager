import React from 'react'

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import FeaturedProfiles from '../components/FeaturedProfiles';
import { Link } from 'react-router-dom';
import FeaturedCompanies from '../components/FeaturedCompanies';
import Footer from '../components/Footer';
import Post from '../components/Post';
import PostsList from '../components/PostsList';
import Events from '../components/events';

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
            <Events />
            <Services />
            <FeaturedProfiles />
            <FeaturedCompanies />
            <Statistics />
            <Footer />
        </>
    )
}

