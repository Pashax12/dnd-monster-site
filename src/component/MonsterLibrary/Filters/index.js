import React from "react";
import './style.css';

export default function Filter(props){
    return(
        <form className='constructor--container'>
            <p className='constructor--text-head'>Monster challenge</p>
            <label className='constructor--text'>Monster min challenge
                <select
                    id="minMonsterChallenge"
                    value={props.value.data.minMonsterChallenge}
                    onChange={props.value.change}
                    name="minMonsterChallenge"
                >
                    <option value="10">0</option>
                    <option value="25">1/8</option>
                    <option value="50">1/4</option>
                    <option value="100">1/2</option>
                    <option value="200">1</option>
                    <option value="450">2</option>
                    <option value="700">3</option>
                    <option value="1100">4</option>
                    <option value="1800">5</option>
                    <option value="2300">6</option>
                    <option value="2900">7</option>
                    <option value="3900">8</option>
                    <option value="5000">9</option>
                    <option value="5900">10</option>
                    <option value="7200">11</option>
                    <option value="8400">12</option>
                    <option value="10000">13</option>
                    <option value="11500">14</option>
                    <option value="13000">15</option>
                    <option value="15000">16</option>
                    <option value="18000">17</option>
                    <option value="20000">18</option>
                    <option value="22000">19</option>
                    <option value="25000">20</option>
                    <option value="33000">21</option>
                    <option value="41000">22</option>
                    <option value="50000">23</option>
                    <option value="62000">24</option>
                    <option value="75000">25</option>
                    <option value="90000">26</option>
                    <option value="105000">27</option>
                    <option value="120000">28</option>
                    <option value="135000">29</option>
                    <option value="155000">30</option>
                </select>
            </label>
            <label className='constructor--text'>Monster max challenge
                <select
                    id="maxMonsterChallenge"
                    value={props.value.data.maxMonsterChallenge}
                    onChange={props.value.change}
                    name="maxMonsterChallenge"
                >
                    <option value="10">0</option>
                    <option value="25">1/8</option>
                    <option value="50">1/4</option>
                    <option value="100">1/2</option>
                    <option value="200">1</option>
                    <option value="450">2</option>
                    <option value="700">3</option>
                    <option value="1100">4</option>
                    <option value="1800">5</option>
                    <option value="2300">6</option>
                    <option value="2900">7</option>
                    <option value="3900">8</option>
                    <option value="5000">9</option>
                    <option value="5900">10</option>
                    <option value="7200">11</option>
                    <option value="8400">12</option>
                    <option value="10000">13</option>
                    <option value="11500">14</option>
                    <option value="13000">15</option>
                    <option value="15000">16</option>
                    <option value="18000">17</option>
                    <option value="20000">18</option>
                    <option value="22000">19</option>
                    <option value="25000">20</option>
                    <option value="33000">21</option>
                    <option value="41000">22</option>
                    <option value="50000">23</option>
                    <option value="62000">24</option>
                    <option value="75000">25</option>
                    <option value="90000">26</option>
                    <option value="105000">27</option>
                    <option value="120000">28</option>
                    <option value="135000">29</option>
                    <option value="155000">30</option>
                </select>
            </label>

            <label className='constructor--text'>Monster size
                <select
                    id="monsterSize"
                    value={props.value.data.monsterSize}
                    onChange={props.value.change}
                    name="monsterSize"
                >
                    <option value="">Not chosen</option>
                    <option value="Tiny">Tiny</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Huge">Huge</option>
                    <option value="Gargantuan">Gargantuan</option>
                </select>
            </label>
            <label className='constructor--text'>Monster type
                <select
                    id="monsterType"
                    value={props.value.data.monsterType}
                    onChange={props.value.change}
                    name="monsterType"
                >
                    <option value="">Not chosen</option>
                    <option value="humanoid">humanoid</option>
                    <option value="aberration">aberration</option>
                    <option value="beast">beast</option>
                    <option value="celestial">celestial</option>
                    <option value="construct">construct</option>
                    <option value="dragon">dragon</option>
                    <option value="elemental">elemental</option>
                    <option value="fey">fey</option>
                    <option value="fiend">fiend</option>
                    <option value="giant">giant</option>
                    <option value="monstrosity">monstrosity</option>
                    <option value="ooze">ooze</option>
                    <option value="plant">plant</option>
                    <option value="undead">undead</option>
                </select>
            </label>
            <label className='constructor--text'>Monster outlook
                <select
                    id="monsterOutlook"
                    value={props.value.data.monsterOutlook}
                    onChange={props.value.change}
                    name="monsterOutlook"
                >
                    <option value="">Not chosen</option>
                    <option value="any">any</option>
                    <option value="unaligned">unaligned</option>
                    <option value="lawful  good">lawful  good</option>
                    <option value="neutral good">neutral good</option>
                    <option value="chaotic good">chaotic good</option>
                    <option value="lawful  neutral">lawful  neutral</option>
                    <option value="neutral">neutral</option>
                    <option value="chaotic neutral">chaotic neutral</option>
                    <option value="lawful  evil">lawful  evil</option>
                    <option value="neutral evil">neutral evil</option>
                    <option value="chaotic evil">chaotic evil</option>

                </select>
            </label>
            <label className='constructor--text-input'> Homebrew
                <input
                    type="checkbox"
                    id="isSource"
                    checked={props.value.data.isSource}
                    onChange={props.value.change}
                    name="isSource"
                />
            </label>
            <label className='constructor--text-input'> Legendary
                <input
                    type="checkbox"
                    id="isLegendaryAction"
                    checked={props.value.data.isLegendaryAction}
                    onChange={props.value.change}
                    name="isLegendaryAction"
                />
            </label>
            <label className='constructor--text-input'> Special skills<input
                    type="checkbox"
                    id="isSpecialSkills"
                    checked={props.value.data.isSpecialSkills}
                    onChange={props.value.change}
                    name="isSpecialSkills"
                />
            </label>
        </form>
    )
}