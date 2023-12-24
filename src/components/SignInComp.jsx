import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignInComp({ auth }) {

    const signInWithGoogle = async () => {
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    return (
        <button onClick={signInWithGoogle}>
            Sign in
        </button>
    )
}