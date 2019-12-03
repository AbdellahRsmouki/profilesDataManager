import React, { Component } from 'react'

import items from './data';

const ProfileContext = React.createContext();

class ProfilesProvider extends Component {
    state = {
        profiles:[],
        sortedProfiles:[],
        featuredProfiles:[],
        loading:true,
        promo:'all',
        option:'all',
        post:'all',
        Student:false,
        laureat:false
    }

    // GETDATA

    componentDidMount(){
        // this.getDATA
        let profiles = this.formatData(items);
        console.log(profiles);
        let featuredProfiles = profiles.filter(profile => profile.featured === true);
        let maxPrice = Math.max(...profiles.map(item=>item.price));
        let maxSize = Math.max(...profiles.map(item=>item.size));
        this.setState({
            profiles, featuredProfiles, sortedProfiles:profiles, loading:false,
            price: maxPrice, maxPrice, maxSize
        })
        // console.log(profiles);
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = parseInt(item.id);
            let image = item.image;
            let profile = {...item,id,image}
            return profile;
        });
        return tempItems;
    }

    getProfile = (slug) =>{
        let tempProfiles = [...this.state.profiles];
        let _slug = slug.split("-");
        console.log("selected profile "+"for "+slug+": "+_slug[0] +" "+ _slug[1]);
        const profile = tempProfiles.find(profile =>  profile.nom ===_slug[0] && profile.prenom ===_slug[1] );
        console.log("selected profile -_-: "+profile);
        return profile;
    }

    handleChange = event =>{
        const target = event.target;
        const value = target.type === 'checkbox' ?
        target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filterProfiles);
    }

    filterProfiles = () => {
        let {profiles,type, capacity, price, minSize, maxSize,breakfast, pets} = this.state;
        // all the profiles
        let tempProfiles = [...profiles];
        // transform values
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if(type!=='all'){
            tempProfiles = tempProfiles.filter(profile=>profile.type===type)
        }

        // filter by price
        tempProfiles = tempProfiles.filter(profile=>profile.price<=price)

        // filter by capacity
        if(capacity!==1){
            tempProfiles = tempProfiles.filter(profile=>profile.capacity>=capacity)
        }

        // filter by size
        tempProfiles = tempProfiles.filter(profile=>profile.size<=maxSize && profile.size>=minSize)

        // filter by pets
        if(pets){
            tempProfiles = tempProfiles.filter(profile=>profile.pets===true)
        }

        // filter by breakfast
        if(breakfast){
            tempProfiles = tempProfiles.filter(profile=>profile.breakfast===true)
        }

        //change state
        this.setState({
            sortedProfiles:tempProfiles
        });
    }

    render() {
        return (
            <ProfileContext.Provider 
                value={{
                    ...this.state,
                    getProfile: this.getProfile,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </ProfileContext.Provider>
        ) 
    }
}



const ProfileConsumer = ProfileContext.Consumer;

export function WithProfileConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProfileConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </ProfileConsumer>
    }
}

export{ProfileConsumer, ProfilesProvider, ProfileContext};