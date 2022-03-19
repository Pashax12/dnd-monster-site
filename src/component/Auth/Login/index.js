import React, {useEffect, useState} from "react";
import './style.css';
import axios from "axios";
import resources from "../../../resource.json";
import {Link} from "react-router-dom";


export default function Login() {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [userAc, setUserAc] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    function handleChange(event) {
        event.preventDefault()
        const {name, value, type, checked} = event.target
        setUser(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const bcrypt = require('bcryptjs');

    function addUser(event) {
        event.preventDefault();
        bcrypt.genSalt(1, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {

                setUserAc(() => {
                    return {
                        email: user.email,
                        username: user.username,
                        password: hash,
                    }
                });
            });
        });
    }

    useEffect(() => {
        if (userAc.password !== "") {
            axios.post(resources.login, userAc)
                .then(value => {
                    setMessage(value.data)
                }).catch(function (error) {
                console.log(error);
            });
        }
    }, [userAc])

    return (
        <div className='login--form'>
            <h1> Create Account</h1>
            {message!==undefined && <div className='login--message-text'>{message}</div>}
            <form className='login--container'>
                <label className='login--text'>Your valid mail
                    <input
                        type="email"
                        className='login--placeholder'
                        placeholder="email"
                        onChange={handleChange}
                        name="email"
                        value={user.email}
                    />
                </label>
                <label className='login--text'>Enter username
                    <input
                        type="text"
                        className='login--placeholder'
                        placeholder="username"
                        onChange={handleChange}
                        name="username"
                        value={user.username}
                    />
                </label>
                <label className='login--text'>Enter password
                    <input
                        type="password"
                        className='login--placeholder'
                        placeholder="password"
                        onChange={handleChange}
                        name="password"
                        value={user.password}
                    />
                </label>
                <button className='login--button-onSubmit' onClick={addUser}>Create Account</button>
            </form>
            <div className='login--message-text'>Have an account?
                <Link to='/auth/authorize' className='login--link'> sing in</Link>
            </div>
        </div>
    )
}