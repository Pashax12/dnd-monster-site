import React, {useEffect, useState} from "react";
import axios from "axios";
import resources from '../../resource.json';
import './style.css';
import Block from "./Block/Block";
import {nanoid} from "nanoid";
import Filter from "./Filters";
import {Scrollbars} from "react-custom-scrollbars-2";


export default function MonsterLibrary(){

    const [monsters, setMonster]  = useState([{}]);

    const [formData, setFormData] = React.useState(
        {
            monsterType:'',
            monsterSize:'',
            minMonsterChallenge:'10',
            maxMonsterChallenge:'155000',
            monsterOutlook:'',
            isSource:false,
            isLegendaryAction:false,
            isSpecialSkills:false
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    useEffect(() => {
       axios.post(resources.postCriteria, formData)
            .then(value => {
                return setMonster(value.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[formData, setMonster]);


    return(
    <main className='library--container'>
        <div className='library--boxes'>

                <Scrollbars
                    autoHide
                    className='library--box-1'
                    universal
                    autoHeight
                    autoHeightMax={600}>
                    <div className='library--contest'>
                        <h1>Our monster</h1>
                        {(monsters.length>1 && monsters.map(value =><Block key={nanoid()} value={value}/>))}
                    </div>
                </Scrollbars>
            <div className='library--box-2'>
                <h3>Filters</h3>
                <Filter value={{data:formData, change:handleChange}} />
            </div>
        </div>

    </main>
    )
}