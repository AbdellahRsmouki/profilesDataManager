import React, { Component } from 'react'

const UserContext = React.createContext();


class UserProvider extends Component {
    state = {
        userName:[],
        loggedIn:false,
        image:0,
        token:0,
        loading:true,
    }

    // GETDATA
    getUser = (loggin,pass) =>{
        let tempProfiles = [...this.state.profiles];
        const profile = tempProfiles.find(profile => profile.slug === pass);
        return profile;
    }
    componentDidMount(){
        // this.getDATA
        let profiles = this.formatData(profiles);
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

    handleChange = event =>{
        const target = event.target;
        const value = target.type === 'checkbox' ?
        target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filterProfiles);
    }

    render() {
        return (
            <UserContext.Provider 
                value={{
                    ...this.state,
                    getProfile: this.getProfile,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </UserContext.Provider>
        ) 
    }
}

export const UserConsumer = UserContext.Consumer
export default UserContext;