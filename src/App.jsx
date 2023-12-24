import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css'
import './App2.css'
import firebaseConfig from "./config/firebaseConfig";
import SignInComp from "./components/SignInComp";
import ChatRoom from "./components/ChatRoom";
import { useEffect } from "react";

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
