import {GoogleAuthProvider, getRedirectResult, signInWithRedirect, onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase-auth-initialize.ts"
import {Button} from "@mui/material";
import styles from './signIn.module.css'
import {useEffect, useState} from "react";
import {Navigate} from "react-router";

const provider = new GoogleAuthProvider();

export default function SignIn() {
    const [signedIn, setSignedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    });

    async function handleClickSignInWithGoogle() {
        /* param:
 * auth: Auth instance associated with Firebase app instance
 * provider: Google provider instance */
        await signInWithRedirect(auth, provider);
    }

    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    // The signed-in user info.
                    const user = result.user;
                    console.log(user);
                    // IdP data available using getAdditionalUserInfo(result)
                }

            }).catch((error) => {
            // Handle Errors here.
            console.error("Error signing in", error);
        });
    }, []);

    return <>
        <div className={styles.main}>
            <div className={styles.buttonsGroup}>
                <Button variant="outlined">Sign In</Button>
                <Button variant="outlined">Sign Up</Button>
                <Button variant="contained" onClick={handleClickSignInWithGoogle}>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"
                         className={styles.logoGoogle}/>
                    <span>Log In with Google</span>
                </Button>
            </div>
            {signedIn && (
                <Navigate to="/home" replace={true}/>
            )}
            {!signedIn && (
                <Navigate to="/sign-in" replace={true}/>
            )}
        </div>

    </>

}
