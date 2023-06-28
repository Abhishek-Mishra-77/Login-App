import React , {useContext} from "react";
import classes from './Navigation.module.css';
import AuthContext from "../context/AuthContext";

const Navigation = (props) => {
   
    const context = useContext(AuthContext)

    return (

        <nav className={classes.nav}>
            <ul>
                {context.isLoggeIn && (<li><a href="/">Users</a></li>)}
                {context.isLoggeIn && <li><a href="/">Admin</a></li>}
                {context.isLoggeIn && <li><button onClick={context.onLogOut} >Logout</button></li>}
            </ul>
        </nav>

    )
}

export default Navigation;