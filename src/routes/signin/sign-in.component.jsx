import './sign-in.styles.scss';
import React, {useEffect} from 'react';
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";

const SignIn = () => {



    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default SignIn;