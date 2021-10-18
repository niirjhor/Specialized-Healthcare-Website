import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, sendSignInLinkToEmail } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init"

initializeAuthentication();
const useFirebases = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser();
            })
            .catch((error) => {
                setError('')
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        });
    }, [])
    return {
        signInUsingGoogle,
        user,
        logOut

    }
}

export default useFirebases;