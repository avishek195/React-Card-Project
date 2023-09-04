import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is a sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Pop up
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;