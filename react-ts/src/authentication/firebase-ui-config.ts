import * as firebaseui from "firebaseui";
import {auth} from "./firebase-auth-initialize.ts";
import firebase from 'firebase/compat/app';

const ui = new firebaseui.auth.AuthUI(auth);
const uiOptions = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            clientId: '757704545017-f2bo3qe08iirnp6eb4cdp3522193jnal.apps.googleusercontent.com'
        },
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    callbacks: {
        signInSuccessWithAuthResult: () => {
            // Return false to avoid redirect.
            return false;
        }
    }
}

export { ui, uiOptions };