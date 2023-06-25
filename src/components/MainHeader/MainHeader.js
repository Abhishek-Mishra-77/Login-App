import React from "react";
import classes from './MainHeader.module.css';
import Navigation from "./Navigation";

const MainHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <h1>A Typical page</h1>
            <Navigation></Navigation>
        </header>
    )
}

export default MainHeader;