import React, { Component } from 'react'

import items from './data';

const ProfileContext = React.createContext();

class ProfilesProvider extends Component {
    state = {
        profiles:[],
        sortedProfiles:[],
        featuredProfiles:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pet:false
    }

    // GETDATA

    componentDidMount(){
        // this.getDATA
        let profiles = this.formatData(items);
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