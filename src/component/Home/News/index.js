import React from "react";
import './style.css';
import {Link} from "react-router-dom";

export default function Short(props) {
    return(
        <div className='news--container'>
            <h3 className='news--title'>{props.val.title}</h3>
            <p className='news--short'>{props.val.introduction}</p>
            <Link to={'article/'+props.val.articleId} className='news--link'>Read more</Link>
            <p className='news--data'>{props.val.uploadDate}</p>

        </div>
    )
}