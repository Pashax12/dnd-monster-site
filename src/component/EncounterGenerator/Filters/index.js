import React from "react";
import './style.css';
import {nanoid} from "nanoid";

export default function Filter(props) {
    return (
        <form className='filter--container' onSubmit={props.value.gener}>
            <label className='filter--text'>Player level
                <select
                    id="playerLevel"
                    value={props.value.data.playerLevel}
                    onChange={props.value.change}
                    name="playerLevel"
                >
                    <option value="">__choose level__</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            </label>

            <label className='filter--text'>Player class
                <select
                    id="playerClass"
                    value={props.value.data.playerClass}
                    onChange={props.value.change}
                    name="playerClass"
                >
                    <option value="">__choose class__</option>
                    <option value="Warrior">Warrior</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Druid">Druid</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Bard">Bard</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Paladin">Paladin</option>
                </select>
            </label>
            <button className='filter--button' onClick={props.value.add}>Add</button>
            <button className='filter--button' onClick={props.value.del}>Delete last</button>
            <div className='filter--player-block-container'
                 id="fightParty"
                 value={props.value.data.fightParty}
                 onChange={props.value.change}
                 name="fightParty">
                {props.value.data.fightParty.map(value =>
                    <div key={nanoid()} className='filter--player-block'>
                        {value}
                    </div>)}
            </div>

            <label className='filter--text'>Fight challenge
                <select
                    id="fightChallenge"
                    value={props.value.data.fightChallenge}
                    onChange={props.value.change}
                    name="fightChallenge"
                >
                    <option value="">Not chosen</option>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                    <option value="DEADLY">Deadly</option>
                </select>
            </label>

            <label className='filter--text-input'> One type?
                <input
                    type="checkbox"
                    id="isMixedType"
                    checked={props.value.data.isMixedType}
                    onChange={props.value.change}
                    name="isMixedType"
                />
            </label>
            <button className='filter--button-generate'>Generate encounter</button>
        </form>
    )
}