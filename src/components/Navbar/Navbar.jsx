import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'
                         style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;