import './sign-in.styles.scss';
import React from 'react';
import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const loginGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        createUserDocumentFromAuth(response.user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUser}>Sign in with Google Button</button>
        </div>
    )
}
export default SignIn;