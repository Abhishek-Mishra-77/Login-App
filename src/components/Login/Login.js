import React, { useState, useEffect, useReducer } from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
import Button from '../UI/Button';

// UseReducer Function for Email validation 
const emailReducer = (state, action) => {
    if (action.type === 'USER_EMAIL') {
        return { value: action.val, isValid: action.val.includes('@') }
    }

    if (action.type === 'EMAIL_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }

    return { value: '', isValid: true }

}

// UseReducer Function for password validation 
const passWordReducer = (state, action) => {
    if (action.type === 'USER_PASSWORD') {
        return { value: action.val, isValid: action.val.trim().length > 6 }
    }

    if (action.type === 'PASSWORD_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }

    return { value: '', isValid: false }
}


// UseReducer Function for college validation

const collegeReducer = (state, action) => {
    if (action.type === 'USER_COLLEGE') {
        return { value: action.val, isValid: action.val.trim().length > 0 };
    }

    if (action.type === 'COLLEGE_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 0 }
    }

    return { value: '', isValid: false }

}









const Login = (props) => {

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setemailIsValid] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswrodIsValid] = useState('');
    // const [enteredCollegeName, setEnteredCollegeName] = useState('');
    // const [collegeNameIsvalid, setCollegeNameIsValid] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);




    // UseReducer state for validating the email 
    const [emailState, dispatchEmail] = useReducer(emailReducer,
        { value: '', isValid: null }
    )


    // useReducer state for validating the password
    const [passwordState, dispatchPassword] = useReducer(passWordReducer,
        { value: '', isValid: null }
    )

    // useReducer state for validating the CollegeName
    const [collegeState, dispatchCollege] = useReducer(collegeReducer, {
        value: '', isValid: null}
    )


    //Once our login page gets valid no need to check 
const {isValid :emailIsValid} = emailState;
const {isValid : passwordIsValid} = passwordState;
const {isValid : collegeNameIsvalid} = collegeState;



   // useEffect to check Validates in only on time 
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('rames')
            setFormIsValid(emailState.isValid && passwordState.isValid && collegeState.isValid);
        }, 500)

        return () => {
            console.log('clean Up')
            clearTimeout(timer)
        }

    }, [emailIsValid, passwordIsValid, collegeNameIsvalid ])




    // email Handler
    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({ type: 'USER_EMAIL', val: event.target.value })
        setFormIsValid(event.target.value.includes('@') && passwordState.isValid && collegeState.isValid)
    }




    // Password Handler
    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({ type: 'USER_PASSWORD', val: event.target.value })
        setFormIsValid(emailState.isValid && passwordState.isValid && collegeState.isValid)
    }




    // CollegeName handler

    const collegeNameChangeHandler = (event) => {
        // setEnteredCollegeName(event.target.value);
        dispatchCollege({ type: 'USER_COLLEGE', val: event.target.value })
        setFormIsValid(emailState.isValid && passwordState.isValid && collegeState.isValid)

    }

    // Check email valid or not
    const validEmailHandler = () => {
        // setemailIsValid(enteredEmail.includes('@'));
        dispatchEmail({ type: 'EMAIL_BLUR' });
    }



    // Check paddword is valid or not
    const validPasswordHandler = () => {
        // setPasswrodIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({ type: 'PASSWORD_BLUR' });
    }



    //Check collegeName is Valid or not 
    const validCollegeNameHandler = () => {
        // setCollegeNameIsValid(enteredCollegeName.trim().length > 0)
        dispatchCollege({ type: 'COLLEGE_BLUR' })
    }




    //Main Submimt button which takes props from App.js or we can say root components
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value)
    }



    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validPasswordHandler}
                    />
                </div>

                <div className={`${classes.control} ${collegeState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="college">College Name</label>
                    <input
                        type="text"
                        id="college "
                        value={collegeState.value}
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