import './Header.css'
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../src/authentication/firebase-auth-initialize.ts";

// icons
import PlacoLogo from '../src/assets/Placo_logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import Notification from '../src/assets/notif.svg';
import Profile from '../src/assets/profile.svg';
import {useState} from "react";
import {Navigate} from "react-router";

const handleLogOut = async () => {
    await signOut(auth).then(() => {
        console.log("Successfully signed out")
    }).catch((error) => {
        console.log(error);
        alert("Hit error while logging out!")
    });

};

function Header() {
    const [signedIn, setSignedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    });

    return (
        <>
            <div className="container">
                <div className="nav">
                    <img src={PlacoLogo} alt="Placo Logo" />
                    <div className="icon">
                        <LogoutIcon onClick={handleLogOut}/>
                        <img src={Notification} alt="Notification icon" />
                        <img src={Profile} alt="profile icon" />
                    </div>
                    {!signedIn && (
                        <Navigate to="/sign-in" replace={true}/>
                    )}
                </div>

            </div>
        </>
    )
}

export default Header