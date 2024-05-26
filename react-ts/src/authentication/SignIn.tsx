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
            .then(async (result) => {
                if (result) {
                    // The signed-in user info.
                    const user = result.user;
                    if (!await checkUserExists(user.uid)) {
                        addNewUserToDB(user);
                    }
                    console.log(user);
                    // IdP data available using getAdditionalUserInfo(result)
                }

            }).catch((error) => {
            // Handle Errors here.
            console.error("Error signing in", error);
        });
    }, []);

    async function checkUserExists(userID: string) {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        let resultExist = false;

        await fetch("https://firestore.googleapis.com/v1/projects/pfa-groupe8/databases/(default)/documents/users/" + userID, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.name != null) {
                    resultExist = true;
                }
            })
            .catch((error) => {
                console.error(error)
            });
        return resultExist;
    }

    function addNewUserToDB({uid, displayName}) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "fields": {
                "userID": {
                    "stringValue": uid
                },
                "displayName": {
                    "stringValue": displayName
                },
                "chantierList": {
                    "arrayValue": {
                        "values": []
                    }
                }
            }
        });

        const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://firestore.googleapis.com/v1/projects/pfa-groupe8/databases/(default)/documents/users/" + uid, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

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
