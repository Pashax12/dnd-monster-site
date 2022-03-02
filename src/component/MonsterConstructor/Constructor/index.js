import React, {useState} from "react";
import './style.css';


export default function Constructor(props) {

    const [meta, setMeta] = useState({
        type: "",
        size: "",
        outlook: "",
        speed: "",
        biom: "",
        languages: "",
        traitName: "",
        traitInf: "",
        actionName: "",
        actionInf: "",
        legActionName: "",
        legActionInf: ""
    });


    function metaChange(event) {
        const {name, value, type, checked} = event.target
        setMeta(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function addMeta() {
        props.metaSetter(`${meta.size} ${meta.type}, ${meta.outlook}`);
    }

    function addSpeed() {
        props.speedSetter(((props.data.Speed !== '' && props.data.Speed) || ' ') + `${meta.biom} ${meta.speed} ft. `);
    }

    function addLanguage() {
        props.languagesSetter(((props.data.Languages !== '' && props.data.Languages) || ' ') + `${meta.languages} `);
    }

    function addTraits() {
        props.traitsSetter(((props.data.Traits !== '' && props.data.Traits) || ' ') + `<p><em><strong>${meta.traitName}: </strong></em>${meta.traitInf}</p>`);
    }

    function addAction() {
        props.actionSetter(((props.data.Actions !== '' && props.data.Actions) || ' ') + `<p><em><strong>${meta.actionName}: </strong></em>${meta.actionName}</p>`);
    }

    function addLegendaryAction() {
        props.legendarySetter(((props.data.Legendary_Actions !== '' && props.data.Legendary_Actions) || ' ') + `<p><em><strong>${meta.legActionName}: </strong></em>${meta.legActionInf}</p>`);
    }

    return (

        <form className='constructor--container' onSubmit={props.addLast}>

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
            <div className='constructor--text-input-inline'>
                <label className='constructor--text'>Monster size
                    <select
                        id="size"
                        value={meta.size}
                        onChange={metaChange}
                        name="size"
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
                        id="type"
                        value={meta.type}
                        onChange={metaChange}
                        name="type"
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
                        id="outlook"
                        value={meta.outlook}
                        onChange={metaChange}
                        name="outlook"
                    >
                        <option value="">Not chosen</option>
                        <option value="any">any</option>
                        <option value="unaligned">unaligned</option>
                        <option value="lawful  good">lawful good</option>
                        <option value="neutral good">neutral good</option>
                        <option value="chaotic good">chaotic good</option>
                        <option value="lawful  neutral">lawful neutral</option>
                        <option value="neutral">neutral</option>
                        <option value="chaotic neutral">chaotic neutral</option>
                        <option value="lawful  evil">lawful evil</option>
                        <option value="neutral evil">neutral evil</option>
                        <option value="chaotic evil">chaotic evil</option>
                    </select>
                    <button className='constructor--button-generate' onClick={addMeta}>+</button>
                </label>

            </div>
            <label className='constructor--text'>Monster armour
                <select
                    id="Armor_Class"
                    value={props.data.Armor_Class}
                    onChange={props.onChange}
                    name="Armor_Class"
                >
                    <option value="">__Choose Armour__</option>
                    <option value="11 (Padded)">Padded</option>
                    <option value="11 (Leather)">Leather</option>
                    <option value="12 (Studded leather)">Studded leather</option>
                    <option value="12 (Hide)">Hide</option>
                    <option value="13 (Chain shirt)">Chain shirt</option>
                    <option value="14 (Scale mail)">Scale mail</option>
                    <option value="14 (Breastplate)">Breastplate</option>
                    <option value="15 (Half plate)">Half plate</option>
                    <option value="14 (Ring mail)">Ring mail</option>
                    <option value="16 (Chain mail)">Chain mail</option>
                    <option value="17 (Splint)">Splint</option>
                    <option value="18 (Plate)">Plate</option>
                    <option value="10 (Natural Armour)">10 Natural Armour</option>
                    <option value="15 (Natural Armour)">15 Natural Armour</option>
                    <option value="20 (Natural Armour)">20 Natural Armour</option>
                </select>
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

            <label className='constructor--text'>Monster challenge
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

            {/*----------------Monster Speed----------------*/}

            <label className='constructor--text'>Monster biom speed
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="monster speed"
                    onChange={metaChange}
                    name="speed"
                    value={meta.speed}
                />
            </label>
            <label className='constructor--text'>speed biom
                <select
                    id="biom"
                    value={meta.biom}
                    onChange={metaChange}
                    name="biom"
                >
                    <option value="">earth</option>
                    <option value="swim">water</option>
                    <option value="fly">sky</option>
                    <option value="burrow">burrow</option>

                </select>
                <button className='constructor--button-generate' onClick={addSpeed}>+</button>
            </label>


            <label className='constructor--text'>Saving throws:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="Saving throws"
                    onChange={props.onChange}
                    name="Saving_Throws"
                    value={props.data.Saving_Throws}
                />
            </label>
            <label className='constructor--text'>Skills:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="Skills"
                    onChange={props.onChange}
                    name="Skills"
                    value={props.data.Skills}
                />
            </label>

            <label className='constructor--text'>Characteristic table:</label>
            <table className='constructor--table'>
                <tbody>
                <tr>
                    <td>
                        <div>STR</div>
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="STR"
                            onChange={props.onChange}
                            name="STR"
                            value={props.data.STR}
                        />
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="STR_mod"
                            onChange={props.onChange}
                            name="STR_mod"
                            value={props.data.STR_mod}
                        />
                    </td>
                    <td className='monster--table-tr'>
                        <div>DEX</div>
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="DEX"
                            onChange={props.onChange}
                            name="DEX"
                            value={props.data.DEX}
                        />
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="DEX_mod"
                            onChange={props.onChange}
                            name="DEX_mod"
                            value={props.data.DEX_mod}
                        />
                    </td>
                    <td className='monster--table-tr'>
                        <div>CON</div>
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="CON"
                            onChange={props.onChange}
                            name="CON"
                            value={props.data.CON}
                        />
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="CON_mod"
                            onChange={props.onChange}
                            name="CON_mod"
                            value={props.data.CON_mod}
                        />
                    </td>
                    <td className='monster--table-tr'>
                        <div>INT</div>
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="INT"
                            onChange={props.onChange}
                            name="INT"
                            value={props.data.INT}
                        />
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="INT_mod"
                            onChange={props.onChange}
                            name="INT_mod"
                            value={props.data.INT_mod}
                        />
                    </td>
                    <td className='monster--table-tr'>
                        <div>WIS</div>
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="WIS"
                            onChange={props.onChange}
                            name="WIS"
                            value={props.data.WIS}
                        />
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="WIS_mod"
                            onChange={props.onChange}
                            name="WIS_mod"
                            value={props.data.WIS_mod}
                        />
                    </td>
                    <td className='monster--table-tr'>
                        <div>CHA</div>
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="CHA"
                            onChange={props.onChange}
                            name="CHA"
                            value={props.data.CHA}
                        />
                        <input
                            type="text"
                            className='constructor--placeholder-stat'
                            placeholder="CHA_mod"
                            onChange={props.onChange}
                            name="CHA_mod"
                            value={props.data.CHA_mod}
                        />
                    </td>
                </tr>
                </tbody>
            </table>


            <label className='constructor--text'>Senses:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="Senses"
                    onChange={props.onChange}
                    name="Senses"
                    value={props.data.Senses}
                />
            </label>
            <label className='constructor--text'>Languages
                <select
                    id="languages"
                    value={meta.languages}
                    onChange={metaChange}
                    name="languages"
                >
                    <option value="Common">common</option>
                    <option value="Dwarvish">dwarvish</option>
                    <option value="Elvish">elvish</option>
                    <option value="Giant">giant</option>
                    <option value="Gnomish">gnomish</option>
                    <option value="Goblin">goblin</option>
                    <option value="Halfling">halfling</option>
                    <option value="Orc">orc</option>
                    <option value="Abyssal">abyssal</option>
                    <option value="Celestial">celestial</option>
                    <option value="Infernal">infernal</option>
                    <option value="Undercommon">undercommon</option>
                    <option value="Draconic">draconic</option>
                    <option value="Deep Speech">deep Speech</option>
                    <option value="Primordial">primordial</option>
                </select>
                <button className='constructor--button-generate' onClick={addLanguage}>+</button>
            </label>


            <label className='constructor--text'>Senses:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="Senses"
                    onChange={props.onChange}
                    name="Senses"
                    value={props.data.Senses}
                />
            </label>


            <label className='constructor--text'>Trait name:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="traitName"
                    onChange={metaChange}
                    name="traitName"
                    value={meta.traitName}
                />
            </label>
            <label className='constructor--text'>Information:
                <textarea
                    className='constructor--placeholder'
                    placeholder="traitInf"
                    onChange={metaChange}
                    name="traitInf"
                    value={meta.traitInf}
                />
            </label>
            <button className='constructor--button-generate' onClick={addTraits}>add trait</button>

            <label className='constructor--text'>Action name:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="actionName"
                    onChange={metaChange}
                    name="actionName"
                    value={meta.actionName}
                />
            </label>
            <label className='constructor--text'>Information:
                <textarea
                    className='constructor--placeholder'
                    placeholder="actionInf"
                    onChange={metaChange}
                    name="actionInf"
                    value={meta.actionInf}
                />
            </label>
            <button className='constructor--button-generate' onClick={addAction}>add action</button>
            <label className='constructor--text'>Legendary action name:
                <input
                    type="text"
                    className='constructor--placeholder'
                    placeholder="legActionName"
                    onChange={metaChange}
                    name="legActionName"
                    value={meta.legActionName}
                />
            </label>
            <label className='constructor--text'>Information:
                <textarea
                    className='constructor--placeholder'
                    placeholder="legActionInf"
                    onChange={metaChange}
                    name="legActionInf"
                    value={meta.legActionInf}
                />
            </label>
            <button className='constructor--button-generate' onClick={addLegendaryAction}>add legendary action</button>

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
            <button className='constructor--button-generate' onClick={props.cleanAll}>Clean all</button>
            <button className='constructor--button-onSubmit' onClick={props.onSubmit}>send monster</button>
        </form>
    )
}