import React from "react";
import './style.css';


export default function Monster(props) {
    return (
        <div className='monster--container-view'>
            <div className='monster--title'>
                <div className='monster--img-block'>
                    {(props.data.img_url && <img src={props.data.img_url}/>) || <p>No monster photo</p>}
                </div>
                <div className='monster--title-block'>
                    <h1 className='monster--title-block-name'>{props.data.name}</h1>
                    <h3 className='monster--title-block-data'>Meta: {props.data.meta}</h3>
                    <h3 className='monster--title-block-data'>Armour: {props.data.Armor_Class}</h3>
                    <h3 className='monster--title-block-data'>HP: {props.data.Hit_Points}{props.data.Hit_Points && ' hp'}</h3>
                    <h3 className='monster--title-block-data'>Danger: {props.data.Challenge} exp</h3>
                    <h3 className='monster--title-block-data'>Speed: {props.data.Speed}</h3>
                </div>
            </div>
            <div className='monster--text-inline'>
                <h4 className='monster--text-data'>Saving throws: {props.data.Saving_Throws || 'No saving throws'}</h4>
                <h4 className='monster--text-data'>Skills: {props.data.Skills || 'No special skills'}</h4>
            </div>
            <table className='monster--table'>
                <tbody>
                <tr>
                    <td>
                        <div>STR</div>
                        {props.data.STR && (`${props.data.STR} ${props.data.STR_mod}`)}</td>
                    <td className='monster--table-tr'>
                        <div>DEX</div>
                        {props.data.DEX && (`${props.data.DEX} ${props.data.DEX_mod}`)}</td>
                    <td className='monster--table-tr'>
                        <div>CON</div>
                        {props.data.CON && (`${props.data.CON} ${props.data.CON_mod}`)}</td>
                    <td className='monster--table-tr'>
                        <div>INT</div>
                        {props.data.INT && (`${props.data.INT} ${props.data.INT_mod}`)}</td>
                    <td className='monster--table-tr'>
                        <div>WIS</div>
                        {props.data.WIS && (`${props.data.WIS} ${props.data.WIS_mod}`)}</td>
                    <td className='monster--table-tr'>
                        <div>CHA</div>
                        {props.data.CHA && (`${props.data.CHA} ${props.data.CHA_mod}`)}</td>
                </tr>
                </tbody>
            </table>
            <div className='monster--text-inline'>
                <h4 className='monster--text-data'>Languages: {props.data.Languages || 'No one language'}</h4>
                <h4 className='monster--text-data'>Senses: {props.data.Senses || 'No senses find'}</h4>
            </div>
            <div className='monster--text-inline'>
                <h4 className='monster--text-data'>Traits:</h4>
                {(props.data.Traits &&
                        <div className='monster--block' dangerouslySetInnerHTML={{__html: props.data.Traits}}/>) ||
                    <div className='monster--block'>No traits found</div>}
            </div>
            <div className='monster--text-inline'>
                <h4 className='monster--text-data'>Actions:</h4>
                {(props.data.Actions &&
                        <div className='monster--block' dangerouslySetInnerHTML={{__html: props.data.Actions}}/>) ||
                    <div className='monster--block'>No actions found</div>}
            </div>
            <div className='monster--text-inline'>
                <h4 className='monster--text-data'>Legendary Actions:</h4>
                {(props.data.Legendary_Actions &&
                        <div className='monster--block'
                             dangerouslySetInnerHTML={{__html: props.data.Legendary_Actions}}/>) ||
                    <div className='monster--block'>No legendary actions found</div>}
            </div>
        </div>
    )
}


