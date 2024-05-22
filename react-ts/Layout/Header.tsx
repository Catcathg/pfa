import React from 'react'
import './Header.css'

//images
import PlacoLogo from '../src/assets/Placo_logo.svg';
import Notification from '../src/assets/notif.svg';
import Profile from '../src/assets/profile.svg';

function Header() {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <img className="logo" src={PlacoLogo} alt="Placo Logo" />
                    <div className="icon">
                        <img className="notif" src={Notification} alt="Notification icon" />
                        <img className="profile" src={Profile} alt="profile icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header