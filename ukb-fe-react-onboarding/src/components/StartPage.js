import React from 'react';
import Header from './Header/Header';
import Authenticate from './Authenticate/Authenticate';


const StartPage = () => {
    return (
        <div className="container">
            <Header/>
            <Authenticate/>
        </div>
    )
}

export default StartPage