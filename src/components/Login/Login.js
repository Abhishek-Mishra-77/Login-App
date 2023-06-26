import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
import Button from '../UI/Button';


const Login = (props) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setemailIsValid] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswrodIsValid] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    // email Handler
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6);
    }

    // Password Handler
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'))
    }

    const validEmailHandler = () => {
        setemailIsValid(enteredEmail.includes('@'));
    }

    const validPasswordHandler = () => {
        setPasswrodIsValid(enteredPassword.trim().length > 6);
    }


    //Main Submimt button which takes props from App.js or we can say root components

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword)
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validPasswordHandler}
                    />
                </div>

                <div className={classes.actions}>
                    <Button type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}>Login</Button>
                </div>

            </form>
        </Card>
    )
}

export default Login;