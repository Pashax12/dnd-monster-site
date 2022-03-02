import React, {useEffect, useState} from "react";
import './style.css'
import axios from "axios";
import resources from "../../resource.json";
import {Scrollbars} from "react-custom-scrollbars-2";
import Block from "../Block";
import {nanoid} from "nanoid";
import Filter from "./Filters";

export default function EncounterGenerator() {
    const [monsters, setMonster] = useState([{}]);

    const [formData, setFormData] = React.useState({
        fightParty: [], playerLevel: '', playerClass: '', fightChallenge: '', isMixedType: false
    })
    const [loadData, setLoadData] = React.useState({ playersLevel: [], difficulty: '', mixedTypes: false})

    function handleAdd(event) {
        event.preventDefault();

        setFormData(prevState => {
            return {
                ...prevState,
                fightParty: [...prevState.fightParty, prevState.playerLevel + ' level ' + prevState.playerClass]
            }
        })
        handleChange(event)
    }

    function handleDel(event) {
        event.preventDefault();
        setFormData(prevState => {
            return {
                ...prevState,
                fightParty: prevState.fightParty.filter((element, index) => index < prevState.fightParty.length - 1)
            }
        })
        console.log(formData.fightParty)
        handleChange(event);
    }

    console.log(formData);


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function generateEncounter(event) {
        event.preventDefault();

        setLoadData(() => {
            return{
                playersLevel: formData.fightParty,
                difficulty: formData.fightChallenge,
                mixedTypes: formData.isMixedType
            }
        });
    }

    useEffect(() => {
        axios.post(resources.createEncounter, loadData)
            .then(value => {
                console.log(value);
                return setMonster(value.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [loadData, setMonster]);

    return (<main className='encounter--container'>
            <div className='encounter--boxes'>
                <div className='encounter--box-1'><h1>Create Encounter</h1>
                    {(monsters.length > 1 && <Scrollbars
                        autoHide
                        universal
                        autoHeight
                        autoHeightMin={500}>
                        <div className='encounter--contest'>
                            {monsters.map(value => <Block key={nanoid()} value={value}/>)}
                        </div>
                    </Scrollbars>)}</div>

                <div className='encounter--box-2'>
                    <h3>Encounter filters</h3>
                    <Filter value={{
                        data: formData, change: handleChange, add: handleAdd, del: handleDel, gener: generateEncounter
                    }}/>
                </div>
            </div>

        </main>)
}