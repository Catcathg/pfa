import {getRedirectResult, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {auth} from "./firebase-auth-initialize.ts"
const provider = new GoogleAuthProvider();
const SignOut = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        signOut(auth).then(() => {
          console.log("Successfully signed out")
        }).catch((error) => {
            // An error happened.
        });
    };

    return (
        <button onClick={onClick} disabled={isLoading}>
            {isLoading ? 'Loading. Please wait!' : 'Sign out With Google'}
        </button>
    );
}

export default SignOut;