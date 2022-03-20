import React, {useEffect, useState} from "react";
import axios from "axios";
import './style.css';
import resources from "../../../resource.json";
import {Link} from "react-router-dom";

export default function Authorize() {
    const [user, setUser] = useState({
        email: "", password: "",
    });
    const [userAc, setUserAc] = useState({
        email: "", password: "",
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

    function addUser(event) {
        event.preventDefault();

        setUserAc(() => {
            return {
                email: user.email, password: user.password,
            }
        });
    }

    useEffect(() => {
        console.log(userAc)
        if (userAc.password !== "") {
            axios.post(resources.auth, userAc)
                .then(value => {
                    setMessage("You successfully authorize in your account")
                    console.log(value.data)
                    localStorage.setItem("token", value.data.token)
                }).catch(function (error) {
            });
        }
    }, [userAc])


    return (<div className='authorize--form'>
            <h1>Authorization</h1>
            {message!==undefined && <div className='login--message-text'>{message}</div>}
            <form className='authorize--container'>
                <label className='authorize--text'>Your valid mail
                    <input
                        type="email"
                        className='authorize--placeholder'
                        placeholder="email"
                        onChange={handleChange}
                        name="email"
                        value={user.email}
                    />
                </label>

                <label className='authorize--text'>Enter password
                    <input
                        type="password"
                        className='authorize--placeholder'
                        placeholder="password"
                        onChange={handleChange}
                        name="password"
                        value={user.password}
                    />
                </label>
                <button className='authorize--button-onSubmit' onClick={addUser}>Login</button>
            </form>
            <div className='login--message-text'>Have no account?
                <Link to='/auth/login' className='login--link'>sing up</Link>
            </div>
        </div>)
}