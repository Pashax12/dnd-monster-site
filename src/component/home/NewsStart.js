import React from "react";
import './NewsStart.css';

export default function NewsStart(props) {
    return(
        <div className='news--container'>
            <h3 className='news--title'>{props.val.title}</h3>
            <p className='news--short'>{props.val.short}</p>
            <p className='news--data'>{props.val.data}</p>
            <p className='news--link'>{props.val.link}</p>
        </div>
    )
}