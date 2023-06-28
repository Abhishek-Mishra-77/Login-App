import React, { Fragment, useContext } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./components/context/AuthContext";

const App = () => {

  const context = useContext(AuthContext);

  return (

    <Fragment>
      <MainHeader />
      <main>
        {!context.isLoggeIn && <Login></Login>}
        {context.isLoggeIn && <Home></Home>}
      </main>
    </Fragment>

  );
}

export default App;
