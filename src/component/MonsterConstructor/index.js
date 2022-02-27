import React, {useEffect, useState} from "react";
import './style.css';
import axios from "axios";
import resources from "../../resource.json";

import Constructor from "./Constructor";
import Monster from "../Monster";
import {Scrollbars} from "react-custom-scrollbars-2";
import Block from "../Block";
import {nanoid} from "nanoid";

export default function MonsterConstructor(){

    const [monsterData, setMonsterData] = React.useState({
        monsterOwner: "",
        name: "",
        meta: "",
        Armor_Class: "",
        Hit_Points: "",
        Speed: "",
        STR: "",
        STR_mod: "",
        DEX: "",
        DEX_mod: "",
        CON: "",
        CON_mod: "",
        INT: "",
        INT_mod: "",
        WIS: "",
        WIS_mod: "",
        CHA: "",
        CHA_mod: "",
        Saving_Throws: null,
        Skills: null,
        Senses: "",
        Languages: "",
        Challenge: 10,
        Traits: "",
        Actions: "",
        Legendary_Actions: null,
        img_url: ""
    });

    console.log(monsterData);

    function addLast(event){
        const {name, value} = event.target
        setMonsterData(prevFormData => {
            return {
                ...prevFormData, [name]: [name] +value
            }
        })
    }


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMonsterData(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function generateMonster(event) {
        event.preventDefault();

        axios.post(resources.createEncounter, monsterData)
            .then(value => {
                alert(value.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
/*
    useEffect(() => {
        axios.post(resources.createEncounter, loadData)
            .then(value => {
                alert('monster added')
            })
            .catch(function (error) {
                console.log(error);
            });
    }, );*/

    return (<main className='library--container'>
        <div className='library--boxes'>
            <div className='library--box-1'>
                <h1>Monster constructor</h1>
                {(monsterData  && <Scrollbars
                    autoHide
                    universal
                    autoHeight
                    autoHeightMin={500}>
                    <div className='library--contest'>
                        <Monster data={monsterData}/>
                    </div>
                </Scrollbars>)}

            </div>

            <div className='library--box-2'>
                <h3>Constructor</h3>
                <Constructor data={monsterData} onChange={handleChange} onSubmit={generateMonster} />
            </div>
        </div>

    </main>)
}