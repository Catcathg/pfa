import {getRedirectResult, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import { useEffect, useState } from 'react';
import {auth} from "./firebase-auth-initialize.ts"
import {redirect} from "react-router-dom";
const provider = new GoogleAuthProvider();
const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        setIsLoading(true);
        await signInWithRedirect(auth, provider);
    };

    useEffect(() => {
        getRedirectResult(auth)
            .then((response) => {
                if (response) {
                    // Handle the signed-in user information
                    const user = response.user;
                    console.log('User signed in:', user);
                    // Your additional code here
                    redirect("http://localhost:5173/sign-in");
                }
            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <button onClick={onClick} disabled={isLoading}>
            {isLoading ? 'Loading. Please wait!' : 'Sign In With Google'}
        </button>
    );
}

export default Login;