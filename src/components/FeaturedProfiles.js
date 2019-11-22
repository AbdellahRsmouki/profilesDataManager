import React, { Component } from 'react'
import Loading from './Loading';
import {ProfileContext} from '../Context';

export default class FeaturedProfiles extends Component {
    static contextType = ProfileContext;
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
                from featured profiles
                <Loading />
            </div>
        )
    }
}
