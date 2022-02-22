import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <Link to='/' className='header--link'>
            <div className='header--container'>
                <h1  className='header--name'>Dnd Monster Guide</h1>
                <h4 className='header--little-text'> From master to masters</h4>
            </div>
        </Link>
    )
}