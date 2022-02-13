import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../Utils/init-firebase'

// create a context with a placeholder value initially
const AuthContext = createContext({
    currentUser: null,
})

// custom hook
export const useAuth = () => useContext(AuthContext)


// Provider that wraps our app.js
export default function AuthContextProvider({children}) {
    const [currentUser,setCurrentUser] = useState(null)

    const value = {
        currentUser
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}