import React from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
import Button from '../UI/Button';


const Login = (props) => {
    return (
        <Card className={classes.login}>
            <form>
                <div className={classes.control}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>

                    <div className={classes.actions}>
                        <Button type="submit">Login</Button>
                    </div>

                
            </form>
        </Card>
    )
}

export default Login;