import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init"

initializeAuthentication();
const useFirebases = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [username, setUsername] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })

    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setUsername(e.target.value);
    }
    const handleRegistration = e => {
        setIsLoading(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log(user);
                verifyEmail();

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })


    }
    const processLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const registerNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setName();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const setName = () => {
        updateProfile(auth.currentUser, { displayName: username })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!

            });
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser();
            })
            .catch((error) => {
                setError('')
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])
    return {
        signInUsingGoogle,
        user,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleNameChange,
        error,
        isLoading,
        setName

    }
}

export default useFirebases;