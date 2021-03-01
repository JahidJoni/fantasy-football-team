import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

function Player(props) {
    // console.log(props.player);
    const { name, position, current_club, image, salary } = props.player;
    const handleHirePlayer = props.handleHirePlayer;

    return (
        <div className="player">
            <img src={image} alt="" />

            <div className="details">
                <div>
                    <h2 className="name">{name}</h2>
                    <h3>{position}</h3>
                    <p><small> From: {current_club}</small></p>
                </div>
                <div className="salary">
                    <h3>{salary}$</h3>
                </div>
            </div>
            <button onClick={ ()=> handleHirePlayer(props.player)}> <FontAwesomeIcon icon= {faPlusSquare}></FontAwesomeIcon> Hire</button>
        </div>
    );
}

export default Player;