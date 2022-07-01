import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.ava} src={props.ava}/>
            <NavLink to={path} style={{textDecoration: 'none', color: 'darkblue'}}>{props.name}</NavLink>
        </div>)
}


export default DialogItem;