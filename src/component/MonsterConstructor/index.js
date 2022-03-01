import React from "react";
import './style.css';
import axios from "axios";
import resources from "../../resource.json";

import Constructor from "./Constructor";
import Monster from "../Monster";
import {Scrollbars} from "react-custom-scrollbars-2";

export default function MonsterConstructor() {


    const cleanForm = {
        monsterOwner: "Anonymous",
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
    };


    const [monsterData, setMonsterData] = React.useState(cleanForm);


    function preventDefault(event) {
        event.preventDefault();
    }

    function clean(event) {
        setMonsterData(cleanForm);
    }


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMonsterData(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function setMeta(newState) {
        setMonsterData(prevFormData => {
            return {
                ...prevFormData,
                meta: newState
            }
        })
    }

    function setLanguage(newState) {
        setMonsterData(prevFormData => {
            return {
                ...prevFormData,
                Languages: newState
            }
        })
    }

    function setSpeed(newState) {
        setMonsterData(prevFormData => {
            return {
                ...prevFormData,
                Speed: newState
            }
        })
    }

    function setAction(newState) {
        setMonsterData(prevFormData => {
            return {
                ...prevFormData,
                Actions: newState
            }
        })
    }

    function setLegendaryAction(newState) {
        setMonsterData(prevFormData => {
            return {
                ...prevFormData,
                Legendary_Actions: newState
            }
        })
    }

    function setTraits(newState) {
        setMonsterData(prevFormData => {
            return {
                ...prevFormData,
                Traits: newState
            }
        })
    }

    function generateMonster(event) {
        event.preventDefault();
        axios.post(resources.addMonster, monsterData)
            .then(value => {
                alert(value.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (<main className='monster-constructor--container'>
        <div className='monster-constructor--boxes'>
            <div className='monster-constructor--box-1'>
                <h1>Monster constructor</h1>
                {(monsterData && <div className='monster-constructor--contest'>
                    <Monster data={monsterData}/>
                </div>)}
            </div>

            <div className='monster-constructor--box-2'>
                <h3>Constructor</h3>
                <Scrollbars
                    hideTracksWhenNotNeeded

                >

                <Constructor data={monsterData} onChange={handleChange} onSubmit={generateMonster}
                             addLast={preventDefault}
                             cleanAll={clean} metaSetter={setMeta} speedSetter={setSpeed} languagesSetter={setLanguage}
                             traitsSetter={setTraits} actionSetter={setAction} legendarySetter={setLegendaryAction}/>
                </Scrollbars>
            </div>

        </div>

    </main>)
}