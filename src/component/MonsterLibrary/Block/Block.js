import React from "react";
import './style.css';
import {Link} from "react-router-dom";


export default function Block(props){
    return(
        <div className='block--container'>
            <h4 className='block--name'>{props.value.name}</h4>
            <p className='block--meta'>Challenge: {props.value.challenge}</p>
            <p className='block--meta'>Meta: {props.value.meta}</p>
            <Link to={'/monster/'+props.value.name} className='block--challenge'><p className='block--meta'>check this monster</p></Link>


        </div>
    )
}


