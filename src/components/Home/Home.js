import React, { useContext } from "react";
import classes from './Home.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../context/AuthContext";



const Home = (props) => {
    const context = useContext(AuthContext)
   return (
      <Card className={classes.home}>
         <h1>Welcome back !</h1>
         <Button onClick={context.onLogOut}>Log Out</Button>
      </Card>
   )
}

export default Home;