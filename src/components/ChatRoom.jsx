import React, { useState } from 'react'
import { collection, addDoc, query as firestoreQuery, orderBy, limit, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessages from './ChatMessages';
import SignOutComp from './SignOutComp';

export default function ChatRoom({ auth, firestore }) {

    const messageRef = collection(firestore, 'messages');
    const query = firestoreQuery(messageRef, orderBy('createdAt'), limit(25));
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await addDoc(messageRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid, photoURL,
        })
        setFormValue('');
    }

    return (
        <>
            <div>
                <SignOutComp auth={auth} />
                {messages && messages.map(
                    msg => (
                        <ChatMessages
                            key={msg.id}
                            message={msg}
                            messageRef={messageRef}
                            auth={auth}
                        />
                    )
                )}
            </div>
            <form onSubmit={sendMessage}>
                <input type="text" value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button type='submit'>Send</button>
            </form>
        </>
    )
}
