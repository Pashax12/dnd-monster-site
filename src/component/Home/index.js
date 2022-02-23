import React, {useState} from "react";
import { nanoid } from 'nanoid'
import './style.css';
import Short from "./News/Short";

export default function Home() {
    //At soon i will take it from server
    const [news, setNews] = useState([{title:"we are open", data:"22.02.2022", link:'/Index', short:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cumque exercitationem harum iure libero quam quasi sed soluta voluptatum. Alias cum cupiditate repellendus ullam veniam vero? Cum, dolor iste"},
        {title:"we are open", data:"22.02.2022", link:'/Index', short:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cumque exercitationem harum iure libero quam quasi sed soluta voluptatum. Alias cum cupiditate repellendus ullam veniam vero? Cum, dolor iste"},
        {title:"we are open", data:"22.02.2022", link:'/Index', short:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cumque exercitationem harum iure libero quam quasi sed soluta voluptatum. Alias cum cupiditate repellendus ullam veniam vero? Cum, dolor iste"}])

    /*axios*/
        /*use nanoid for keys*/
    return (
        <main className='home--container'>
            {news.map(value => <Short key={nanoid()} val={value}/>)}
        </main>
    )
}