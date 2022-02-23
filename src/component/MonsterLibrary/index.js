import React from "react";
import './style.css';
import Block from "./Block/Block";
import {nanoid} from "nanoid";


export default function MonsterLibrary(){

    const [formData, setFormData] = React.useState(
        {
            monsterType:'',
            monsterSize:'',
            minMonsterChallenge:'10',
            maxMonsterChallenge:'155000',
            monsterOutlook:'',
            source:true,
            legendaryAction:false,
            specialSkills:false
        }
    )
    console.log(formData.monsterType)

    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }



    // const testclass ={name:'Acolyte', challenge:'1000', meta:'Some meta'};
    return(
    <main className='library--container'>
        <div className='library--boxes'>

            <div className='library--box-1'>
                <h1>Our monster</h1>
                 {/*{(monster.length>1 && monster.map(value =><Block key={nanoid()} value={value} /> ))}*/}
            </div>
            <div className='library--box-2'>
                <h3>Filters</h3>
                <form className='filter--container'>
                    <p className='filter--text-head'>Monster challenge</p>
                    <label className='filter--text'>Monster min challenge</label>
                    <select
                        id="minMonsterChallenge"
                        value={formData.minMonsterChallenge}
                        onChange={handleChange}
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
                </form>
            </div>
        </div>

    </main>
    )
}