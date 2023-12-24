import React from 'react'

export default function ChatMessages(props) {

    const { text, uid, photoURL } = props.message;
    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="user" />
            <p>{text}</p>
        </div>
    </>
    )
}
