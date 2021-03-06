import React, {Component} from 'react'

import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profiles from '../pages/profiles'



export default class Navbar extends Component {
    state = {
        isOpen:false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen});
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
                    <ul className={this.state.isOpen?
                        "nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profiles">Profiles</Link>
                        </li>
                        <li>
                            <Link to="/companies">Companies</Link>
                        </li>
                        <ul class="nav-links show-nav">
                            <li>
                                <Link  to="/login">Sign in</Link>
                            </li>
                            <li>
                                <Link  to="/logout">Sign out</Link>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}
