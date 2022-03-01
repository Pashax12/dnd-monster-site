import React, {useState} from "react";
import { nanoid } from 'nanoid'
import './style.css';
import Short from "./News/Short";

export default function Home() {
    //At soon i will take it from server
    const [news, setNews] = useState([]);

    return (
        <main className='home--container'>
            {news.map(value => <Short key={nanoid()} val={value}/>)}
        </main>
    )
}