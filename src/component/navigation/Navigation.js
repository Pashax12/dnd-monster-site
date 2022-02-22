import React from "react";
import './Navigation.css';
import {Link} from "react-router-dom";

export default function Navigation() {
    return(
     <nav className='navigation--container'>
         <Link to='/generator' className='navigation--link'><button className='navigation--button'>Create encounter</button></Link>
         <Link to='/constructor' className='navigation--link'><button className='navigation--button'>Create monster</button></Link>
         <Link to='/library' className='navigation--link'><button className='navigation--button'>Our monsters</button></Link>
     </nav>
    )
}
