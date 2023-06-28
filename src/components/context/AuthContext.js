import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggeIn: false,
    onLogOut: () => { },
    onLogOut: (email, password) => { }
})





export const AuthContextProvider = (props) => {

    const [isLoggeIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeUsersPassword = localStorage.getItem('UsergetLogin');
        if (storeUsersPassword === 'samosa') {
            setIsLoggedIn(true);
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('UsergetLogin')
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('UsergetLogin', 'samosa');
        setIsLoggedIn(true);
    }


    return (<AuthContext.Provider
        value={{
            isLoggeIn: isLoggeIn,
            onLogOut: logoutHandler,
            onLogin: loginHandler
        }}
    >{props.children}</AuthContext.Provider>)
}

export default AuthContext;