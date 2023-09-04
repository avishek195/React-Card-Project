
import { useState } from "react";
import { createAuthUserWithEmailAndPasssword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFromFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFromFields);
    const {displayName, email, password, confirmPassword} = formFields;
    // console.log(formFields);
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    const resetForm = () => {
        setFormFields(defaultFromFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Pasword do not match");
            return;
        }
        try{
         const {user} = await createAuthUserWithEmailAndPasssword(email, password);
            //console.log(user);
         await createUserDocumentFromAuth(user, {displayName});
         resetForm();
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert("Cannot create user, email already in use");
            }else{
                console.log(('Already Exists', err));
            }
            
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                 label="Display Name"
                 type="text" 
                 required 
                 onChange={handleChange}
                 name="displayName"
                 value={displayName} />

                <FormInput
                label="Email"
                 required 
                 type="email"
                 onChange={handleChange}
                 name="email" 
                 value={email} />

                <FormInput
                 label="Password"
                 required 
                 type="password" 
                 onChange={handleChange} 
                 name="password" 
                 value={password} />

                <FormInput
                label="Confirm Password"
                 required 
                 type="password" 
                 onChange={handleChange} name="confirmPassword" 
                 value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;