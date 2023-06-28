import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
import Button from '../UI/Button';
import AuthContext from "../context/AuthContext";
import Input from "../UI/Input";



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
    const authContext = useContext(AuthContext)



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
        value: '', isValid: null
    }
    )


    //Once our login page gets valid no need to check 
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    const { isValid: collegeNameIsvalid } = collegeState;



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

    }, [emailIsValid, passwordIsValid, collegeNameIsvalid])




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
        authContext.onLogin(emailState.value, passwordState.value)
    }



    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    label="E-Mail"
                    type="email"
                    id="E-Mail"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validEmailHandler}
                />

                <Input
                    label="Password"
                    type="password"
                    id="Password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validPasswordHandler}
                />

                <Input
                    label="College Name"
                    type="collegName"
                    id="College"
                    isValid={collegeNameIsvalid}
                    value={collegeState.value}
                    onChange={collegeNameChangeHandler}
                    onBlur={validCollegeNameHandler}
                />

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