import {signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect} from "firebase/auth";
import {auth} from "./firebase-auth-initialize.ts"
import {useEffect} from "react";
import {ui, uiOptions} from "./firebase-ui-config.ts";



const provider = new GoogleAuthProvider();

export default function SignIn() {

   function handleClick() {
       /* param:
* auth: Auth instance associated with Firebase app instance
* provider: Google provider instance */
       signInWithRedirect(auth, provider);
       getRedirectResult(auth)
           .then((result) => {
               // This gives you a Google Access Token. You can use it to access Google APIs.
               const credential = GoogleAuthProvider.credentialFromResult(result);
               const token = credential.accessToken;

               // The signed-in user info.
               const user = result.user;
               // IdP data available using getAdditionalUserInfo(result)
               // ...
           }).catch((error) => {
           // Handle Errors here.
           console.log(error);
           const credential = GoogleAuthProvider.credentialFromError(error);
           // ...
       });
   }

    return <div>
        <button onClick={handleClick}>Sign In with Google</button>
    </div>
}

// export default function SignIn() { useEffect(() => {
//     // Check if FirebaseUI instance already exists to avoid multiple initializations
//     if (!ui.isPendingRedirect()) {
//         ui.start('#firebaseui-auth-container', uiOptions);
//     }
// }, []); // Empty dependency array ensures this runs only once
//
//     return <div id="firebaseui-auth-container"></div>;
// };