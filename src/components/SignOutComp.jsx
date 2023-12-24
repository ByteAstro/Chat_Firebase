import React from 'react'
import { signOut } from "firebase/auth";

export default function SignOutComp({ auth }) {
    const signOutHandler = () => signOut(auth);
    return (
        <button onClick={signOutHandler}>
            Sign Out
        </button>
    )
}
