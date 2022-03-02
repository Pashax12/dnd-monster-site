import React, {useEffect, useState} from "react";
import { nanoid } from 'nanoid'
import './style.css';
import Short from "./News";
import axios from "axios";
import resource from "../../resource.json"

export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() =>{
        axios.get(resource.getNews).then(value => setNews(value.data));
    },[setNews]);
    return (
        <main className='home--container'>
            {news.map(value => <Short key={nanoid()} val={value}/>)}
        </main>
    )
}