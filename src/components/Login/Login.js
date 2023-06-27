import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
import Button from '../UI/Button';


const Login = (props) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setemailIsValid] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswrodIsValid] = useState('');
    const [enteredCollegeName, setEnteredCollegeName] = useState('');
    const [collegeNameIsvalid, setCollegeNameIsValid] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);




    //useEffect to check Validates in only on time 
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('rames')
            setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim().length > 0);
        }, 500)

        return () => {
            console.log('clean Up')
            clearTimeout(timer)
        }

    }, [enteredEmail, enteredPassword, enteredCollegeName])




    // email Handler
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

    }

    // Password Handler
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

    }


    // CollegeName handler

    const collegeNameChangeHandler = (event) => {
        setEnteredCollegeName(event.target.value);
    }

    // Check email valid or not
    const validEmailHandler = () => {
        setemailIsValid(enteredEmail.includes('@'));
    }



    // Check paddword is valid or not
    const validPasswordHandler = () => {
        setPasswrodIsValid(enteredPassword.trim().length > 6);
    }



    //Check collegeName is Valid or not 
    const validCollegeNameHandler = () => {
        setCollegeNameIsValid(enteredCollegeName.trim().length > 0)
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

                <div className={`${classes.control} ${collegeNameIsvalid === false ? classes.invalid : ''}`}>
                    <label htmlFor="college">College Name</label>
                    <input
                        type="text"
                        id="college "
                        value={enteredCollegeName}
                        onChange={collegeNameChangeHandler}
                        onBlur={validCollegeNameHandler}
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