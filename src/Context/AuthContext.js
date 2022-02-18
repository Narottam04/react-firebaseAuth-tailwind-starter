import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../Utils/init-firebase'

// create a context with a placeholder value initially
const AuthContext = createContext()

// custom hook
export const useAuth = () => useContext(AuthContext)


// Provider that wraps our app.js
export default function AuthContextProvider({children}) {
    const [currentUser,setCurrentUser] = useState(null)

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }   

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth)
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const value = {
        currentUser,
        signUp,
        login,
        logout,
        signInWithGoogle
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}