import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import '../Bootstrap/bootstrap.min.css'
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
                    <h3 className="name">{name}</h3>
                    <h3>{position}</h3>
                    <p><small> From: {current_club}</small></p>
                </div>
                <div className="salary">
                    <h4>{salary}$</h4>
                </div>
            </div>
            <Button className="button" variant="light" onClick={ ()=> handleHirePlayer(props.player)}> <FontAwesomeIcon icon= {faPlusSquare}></FontAwesomeIcon> Hire  </Button>
        </div>
    );
}

export default Player;