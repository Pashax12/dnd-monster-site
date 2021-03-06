import React from "react";
import './style.css';
import {Link} from "react-router-dom";

export default function Block(props){
    return(
        <div className='block--container'>
            <h4 className='block--name'>{props.value.monsterName}</h4>
            <p className='block--meta'>Challenge: {props.value.monsterChallenge}</p>
            <p className='block--meta'>Meta: {props.value.monsterMeta}</p>
            <Link to={'/monster/'+props.value.monsterName} className='block--link'><p className='block--meta'>check this monster</p></Link>
        </div>
    )
}


