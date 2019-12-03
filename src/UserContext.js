import React, { Component } from 'react'

const UserContext = React.createContext();


class UserProvider extends Component {
    state = {
        user:{
            id: "",
            login:"",
            token:0,
            nom: "",
		    prenom: "",
		    ville: "",
		    pays: "",
		    filiere: "",
		    linkedIn: "",
		    image: "",
		    featured : false,
		    details: " ",
		    keywords:""
        },
        loggedIn:false,
        loading:true,
    }

    // GETDATA
    checkAuthen = (login,pass) =>{
        let _pass="pass";
        let _login="abde";
        if(_login === login && _pass === pass){
            this.setState
            ({
                loading:false,
                loggedIn:true,
                user:{login:_login, promo: "2020",filiere:"GL", featured:true, linkedIn:"https://www.linkedin.com/in/hassan-mahmoud-495a60198/",...this.state.user}
            });
            return true;
        }
        return false;
    }
    componentDidMount(){
        // this.getDATA

        // console.log(user);
    }

    handleUserStateChange = event =>{
        this.setState({
            loggedIn:true
        });
        console.log(this.state.loggedIn)
    }
    logout = () =>{
        this.setState({
            loggedIn:false
        });
    }

    render() {
        return (
            <UserContext.Provider 
                value={{
                    ...this.state,
                    loggedIn:this.state.loggedIn,
                    checkAuthen: this.checkAuthen,
                    logout:this.logout,
                    handleUserStateChange: this.handleUserStateChange
                }}>
                {this.props.children}
            </UserContext.Provider>
        ) 
    }
}

const UserConsumer = UserContext.Consumer

export function WithUserConsumer(Component){
    return function ConsumerWrapper(props){
        return <UserConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </UserConsumer>
    }
}
export{UserConsumer, UserProvider, UserContext};