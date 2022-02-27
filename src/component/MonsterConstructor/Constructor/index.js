import React from "react";
import './style.css';
import {nanoid} from "nanoid";

export default function Constructor(props) {
    return (
        <form className='constructor--container' onSubmit={props.onSubmit}>
            <label className='constructor--text'>Monster name
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="monster name"
                    onChange={props.onChange}
                    name="name"
                    value={props.data.name}
                />
            </label>

            <label className='constructor--text'>Monster HP
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="0"
                    onChange={props.onChange}
                    name="Hit_Points"
                    value={props.data.Hit_Points}
                />
            </label>
            <label className='constructor--text'>Image url
                <select
                    id="playerLevel"
                    value={props.data.Challenge}
                    onChange={props.onChange}
                    name="Challenge"
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

            {/*<button className='filter--button' onClick={props.value.add}>Add</button>*/}
            {/*<button className='filter--button' onClick={props.value.del}>Delete last</button>*/}
            <label className='constructor--text'>Image url
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="Photo url"
                    onChange={props.onChange}
                    name="img_url"
                    value={props.data.img_url}
                />
            </label>
            <button className='constructor--button-generate'>send monster</button>
        </form>
    )
}