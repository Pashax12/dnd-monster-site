import React from "react";
import './style.css'
import {Link} from "react-router-dom";

export default function ErrorPage() {
    return(
        <main>
            <div className='ErrorPage--block'>
                <h3 className='ErrorPage--text'>Ooops something went wrong try it <Link className='ErrorPage--link' to='/' >again</Link></h3>
            </div>
        </main>
    )
}