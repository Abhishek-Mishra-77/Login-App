import React, { useContext } from "react";
import classes from './Home.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";



const Home = (props) => {
  
   return (
      <Card className={classes.home}>
         <h1>Welcome back !</h1>
         <Button onClick={props.onLogOut}>Log Out</Button>
      </Card>
   )
}

export default Home;