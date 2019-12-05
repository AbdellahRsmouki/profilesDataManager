import React, {Component} from 'react'

import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profiles from '../pages/profiles';
import {UserContext} from '../UserContext';
import {useContext} from 'react'




export default class Navbar extends Component {
    static contextType = UserContext;

    state = {
        isOpen:false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    }
    logout = () => {
        const {logout}=this.context;
        logout();
    }

    render(){
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="./">
                            <img className="logo-image" src ={logo} alt="ENSIAS"></img>
                        </Link>
                        <button type="button" className="nav-btn"
                            onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className="nav-links show-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profiles">Profiles</Link>
                        </li>
                        <li>
                            <Link to="/companies">Companies</Link>
                        </li>
                    </ul>
                    <ul class="nav-links show-nav">
                        <div>
                            <Link  to="/auth">S'authentifier</Link>
                        </div>
                            {/*<li>
                                <Link onClick={this.logout}  to="/auth">Sign out</Link>
                            </li>*/}
                        </ul>
                </div>
            </nav>
        )
    }
}
