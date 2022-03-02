import React from "react";
import './style.css';

const Footer = () => {
    return (
        <div className='footer--container'>
            <p className='footer--text'>
                "Dnd monster guide" site for any monster data files  write on a link below
            </p>
            <p className='footer--text'>
                In case u have a problem contact us on github <a href='https://github.com/Pashax12'
                                                          className='footer--link'> @Paul</a>
            </p>
        </div>
    );
};
export default Footer;