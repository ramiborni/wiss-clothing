import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        } else {
            try {
                const response = await createAuthUserWithEmailAndPassword(email, password);
                if (response) {
                    await createUserDocumentFromAuth({...response.user, displayName})
                    resetFormFields()
                }
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Email already in use')
                } else if (error.code === 'auth/invalid-email') {
                    alert('Invalid email')
                } else if (error.code === 'auth/weak-password') {
                    alert('Password is too weak')
                } else {
                    alert(error.message)
                }
            }
        }
    }


    return (
        <div>
            <h1>Sign up with your email & password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text"
                           required
                           value={displayName}
                           onChange={handleChange}
                           name="displayName"/>

                <FormInput label='E-mail' type="email"
                           required
                           value={email}
                           onChange={handleChange}
                           name="email"/>
                <FormInput label='Password' type="password"
                           required
                           value={password}
                           onChange={handleChange}
                           name="password"/>
                <FormInput label='Confirm Password' type="password"
                           required
                           value={confirmPassword}
                           onChange={handleChange}
                           name="confirmPassword"/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;