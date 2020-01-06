import React, { Component } from 'react'

import items from './data';
import axios from './axios'

const ProfileContext = React.createContext();

class ProfilesProvider extends Component {
    state = {
        profiles:[],
        sortedProfiles:[],
        featuredProfiles:[],
        loading:true,
        promo:'all',
        filiere:'all',
        poste:'all',
        student:false,
        laureat:false
    }

    // GETDATA
    getData(){
        axios
            .get(`/profiles/`, {})
            .then(res => {
                const data = res.data
                console.log("getted profiles from the api: "+ JSON.stringify(data))
                this.setState({profiles:data});

            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount(){
        // this.getDATA
        // this.getData();
        this.setState({profiles:items});
        let profiles = this.formatData(items);
        console.table(profiles);
        let featuredProfiles = profiles.filter(profile => profile.featured === true).slice(0, 3);
        // let maxPrice = Math.max(...profiles.map(item=>item.price));
        // let maxSize = Math.max(...profiles.map(item=>item.size));
        this.setState({
            profiles, featuredProfiles, sortedProfiles:profiles, loading:false,
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
        const value = target.type === 'checkbox' ? target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filterProfiles);
    }

    filterProfiles = () => {

        let {profiles, laureat, student, poste,filiere, promo} = this.state;
        // all the profiles
        let tempProfiles = [...profiles];
        // transform values
        // capacity = parseInt(capacity);
        // price = parseInt(price);
        // filter by type
        if(poste!=='all'){
            tempProfiles = tempProfiles.filter(profile=>profile.poste===poste)
        }
        if(filiere!=='all'){
            tempProfiles = tempProfiles.filter(profile=>profile.filiere===filiere)
        }if(promo!=='all'){
            tempProfiles = tempProfiles.filter(profile=>profile.promo===promo)
        }
        // filter by pets
        if(laureat){
            tempProfiles = tempProfiles.filter(profile=>profile.laureat===true)
        }

        // filter by breakfast
        if(student){
            tempProfiles = tempProfiles.filter(profile=>profile.student===true)
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