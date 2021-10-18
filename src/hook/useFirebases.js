import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init"

initializeAuthentication();
const useFirebases = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');

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

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleRegistration = e => {
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


    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
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
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleNameChange,
        error

    }
}

export default useFirebases;