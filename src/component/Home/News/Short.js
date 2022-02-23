import React from "react";
import './Short.css';
import {Link} from "react-router-dom";

export default function Short(props) {
    return(
        <div className='news--container'>
            <h3 className='news--title'>{props.val.title}</h3>
            <p className='news--short'>{props.val.short}</p>
            <p className='news--data'>{props.val.data}</p>
            <Link to={props.val.link} className='news--link'>Read more</Link>
        </div>
    )
}