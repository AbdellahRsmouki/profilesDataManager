import React, { Component } from 'react'
import Loading from './Loading';
import {ProfileContext} from '../Context';
import Title from './Title';
import Profile from './Profile'

export default class FeaturedProfiles extends Component {
    static contextType = ProfileContext;
    render() {
        let {loading, featuredProfiles:profiles} = this.context;
        profiles = profiles.map(profile => {
            return <Profile key={profile.id} profile = {profile} />
        })
        console.log(profiles);
        return (
            <section className="featured-rooms">
                <Title title="Featured Profiles" />
                <div className="featured-rooms-center" >
                {loading?<Loading />:profiles}
                </div>
            </section>
        )
    }
}
