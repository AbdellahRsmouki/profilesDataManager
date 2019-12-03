import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
import App from './App';
import {ProfilesProvider} from './ProfilesContext';
import {UserProvider} from './UserContext';
import {CompaniesProvider} from './CompaniesContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <UserProvider>
        <ProfilesProvider>
            <CompaniesProvider>
                <Router>
                    <App />
                </Router>
            </CompaniesProvider>
        </ProfilesProvider>
    </UserProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
