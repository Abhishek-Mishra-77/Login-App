import React, { Fragment } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
// import Home from "./components/Home/Home";
import Login from "./components/Login/Login";




function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      {/* <Home></Home> */}
      <Login></Login>
    </Fragment>
  );
}

export default App;
