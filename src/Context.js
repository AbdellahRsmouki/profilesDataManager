import React, { Component } from 'react'

import items from './data';

const ProfileContext = React.createContext();

class ProfilesProvider extends Component {
    state = {
        profiles:[],
        sortedProfiles:[],
        featuredProfiles:[],
        loading:true
    }

    // GETDATA

    componentDidMount(){
        // this.getDATA
        let profiles = this.formatData(items);
        let featuredProfiles = profiles.filter(profile => profile.featured === true);
        this.setState({
            profiles, featuredProfiles, sortedProfiles:profiles, loading:false
        })
        // console.log(profiles);
    }

    formatData(items){
        let tempItems = items.map(item => {
            
            let id = item.sys.id;
            let images = item.fields.images.map(image => 
                image.fields.file.url
            );
            let profile = {...item.fields,images,id}
            return profile;
        });
        return tempItems;
    }

    getProfile = (slug) =>{
        let tempProfiles = [...this.state.profiles];
        const profile = tempProfiles.find(profile => profile.slug === slug);
        return profile;
    }

    render() {
        return (
            <ProfileContext.Provider value={{...this.state, getProfile: this.getProfile}}>
                {this.props.children}
            </ProfileContext.Provider>
        ) 
    }
}



const ProfileConsumer = ProfileContext.Consumer;

export{ProfileConsumer, ProfilesProvider, ProfileContext};