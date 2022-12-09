import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';

import { useLocation } from 'react-router-dom';


const Account = () => {
    const location = useLocation();
    try {
        if (location.state.id != null) {
            var id = location.state.id
            console.log('Account id = ' + id)
        }

    }
    catch (error) {
        console.log('errroooooor' + error)
        window.location.href = '/';
    }

    return (
        <div>
            <Header id={id} />
            <Profile id={id} />
            <Footer />
        </div>
    );
};

export default Account;