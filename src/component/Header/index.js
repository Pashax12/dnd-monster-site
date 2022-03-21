import React from "react";
import './style.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className='header--box'>
            <Link to='/' className='header--link'>
                <div className='header--container'>
                    <h1  className='header--name'>Dnd Monster Guide</h1>
                    <h4 className='header--little-text'> From master to masters</h4>
                </div>

            </Link>
            <Link to='/auth/login' className='header--link-2'>
                <div className='header--registration'><h4 className='header--logIn-text'>Log In</h4></div>
            </Link>
        </div>

    )
}