import React, {useEffect, useState} from "react";
import axios from "axios";
import resource from "../../resource.json";
import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";

export default function Article() {
    const [news, setNews] = useState({});
    const id = useParams().articleId;

    useEffect(() => {
        axios.get(resource.getNews + id).then(value => setNews(value.data));
    }, [id, setNews]);

    return (

        <div className='news--container'>

            <h3 className='news--title'>{news.title}</h3>
            <p className='news--data'>{news.uploadDate}</p>
            {(news.content && news.content.split('\n').map(value => <p key={nanoid()}
                                                                       className='news--short'>{value}</p>))}
        </div>

    )
}