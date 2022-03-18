import React, {useEffect, useState} from "react";
import './style.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import resources from "../../resource.json";
import Monster from "../Monster";

export default function MonsterPage() {
    const monsterName = useParams().monstername;
    const [monsterData, setMonsterData] = useState();

    useEffect(() => {
        axios.get(resources.getMonster + monsterName)
            .then(value => {
                setMonsterData(value.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [monsterName, setMonsterData]);

    console.log(monsterData);

    return (<div className='monster--view-container'>
            {(monsterData !== undefined && <Monster data={monsterData}/>) || <h3>Loading data</h3>}
        </div>)
}