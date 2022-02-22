import React, {useState} from "react";
import './Home.css';
import NewsStart from "./NewsStart";

export default function Home() {
    //At soon i will take it from server
    const [news, setNews] = useState([{title:"we are open", data:"22.02.2022", link:'/generator', short:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cumque exercitationem harum iure libero quam quasi sed soluta voluptatum. Alias cum cupiditate repellendus ullam veniam vero? Cum, dolor iste"},
        {title:"we are open", data:"22.02.2022", link:'/generator', short:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cumque exercitationem harum iure libero quam quasi sed soluta voluptatum. Alias cum cupiditate repellendus ullam veniam vero? Cum, dolor iste"},
        {title:"we are open", data:"22.02.2022", link:'/generator', short:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cumque exercitationem harum iure libero quam quasi sed soluta voluptatum. Alias cum cupiditate repellendus ullam veniam vero? Cum, dolor iste"}])


    return (
        <main className='home--container'>
            {news.map(value => <NewsStart val={value}/>)}
        </main>
    )
}