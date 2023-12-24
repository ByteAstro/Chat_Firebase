import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css'
import './App2.css'
import SignInComp from "./components/SignInComp";
import ChatRoom from "./components/ChatRoom";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <header>
      </header>
      <section>
        {user ? (
          <ChatRoom auth={auth}
            firestore={firestore}
          />
        ) : (
          <SignInComp auth={auth} />
        )}
      </section>
    </>
  )
}

export default App
