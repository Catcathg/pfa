import './App.css';
import Logo from './assets/Placo_logo 2.png'
import {Navigate} from "react-router";
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./authentication/firebase-auth-initialize.ts";

function App() {
    const [signedIn, setSignedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    });

  return (
    <div className="App">
        <img src={Logo} alt={"logo"} />
        {signedIn && (
            <Navigate to="/home" replace={true}/>
        )}
        {!signedIn && (
            <Navigate to="/sign-in" replace={true}/>
        )}
    </div>
  )
}

export default App;

