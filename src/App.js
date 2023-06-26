import React, { useState, Fragment, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";




const App = () => {


  const [isLoggeIn, setIsLoggedIn] = useState(false);

  // useEffect for once I login then no need to come back in login page i will reach in the home

  useEffect(() => {
    const storeUsersPassword = localStorage.getItem('UsergetLogin');
    if (storeUsersPassword === 'samosa') {
      setIsLoggedIn(true);
    }
  }, [])

  // Login from getting email and password from Login component
  const loginHandler = (email, password) => {
    localStorage.setItem('UsergetLogin', 'samosa');
    setIsLoggedIn(true);
  }

  //LogOut From getting home to comeback login Component
  const logOutHandler = () => {
    localStorage.removeItem('UsergetLogin')
    setIsLoggedIn(false);
  }

  return (
    <Fragment>
      <MainHeader
        isAuthenticated={isLoggeIn}
        onLogOut={logOutHandler}>
      </MainHeader>

      <main>
        {!isLoggeIn && <Login onLogin={loginHandler}></Login>}
        {isLoggeIn && <Home onLogOut={logOutHandler}></Home>}

      </main>

    </Fragment>
  );
}

export default App;
