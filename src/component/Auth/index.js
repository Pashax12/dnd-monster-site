import React, {useEffect, useState} from "react";
import './style.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import resources from "../../resource.json";
import Login from "./Login";
import Authorize from "./Authorize";

export default function Auth() {
    const stat = useParams().stat;
    return (
        <div className='auth--container'>{(stat === "login" && <Login />) ||(stat === "authorize"&& <Authorize />)}</div>
    )
}
