import React, {useContext, useEffect, useState} from "react";
import {
    auth, createUserDocumentFromAuth, loginUserWithEmailAndPassword, signInWIthGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import {getRedirectResult} from "firebase/auth";
import './sign-in-form.styles.scss';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {UserContext} from "../../context/context.user";

const defaultForm = {
    email: '', password: ''
};

const SignInForm = () => {

    useEffect(() => {
        const RedirectResult = async () => {
            const {user} = await getRedirectResult(auth)
            if (user) {
                const userDocRef = await createUserDocumentFromAuth(user);
                setCurrentUser(user);
            }
        };
        RedirectResult();
    }, []);


    const [formFields, setFormFields,] = useState(defaultForm);
    const {email, password} = formFields;

    const {setCurrentUser} = useContext(UserContext)


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            return;
        } else {
            try {
                const {user} = await loginUserWithEmailAndPassword(email, password);
                setCurrentUser(user);
                alert('Successfully logged in');
            } catch (e) {
                console.error(e);
                if (e.code === 'auth/user-not-found') {
                    alert('User not found');
                } else if (e.code === 'auth/wrong-password') {
                    alert('Wrong password');
                } else {
                    alert('Something went wrong');
                }
            }
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput value={email}
                           label="E-mail"
                           type="email"
                           name="email"
                           required
                           onChange={handleChange}/>
                <FormInput value={password}
                           label="Password"
                           type="password"
                           name="password"
                           required
                           onChange={handleChange}/>
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType='google' onClick={signInWIthGoogleRedirect}>Sign in with Google Redirect</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;