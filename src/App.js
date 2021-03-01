import './App.css';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import jsonData from './fakeData/myClub.json';
import Hire from './components/Hire/Hire';



function App() {
  const [player, setPlayers] = useState([]);
  const [hire, setHire] = useState([]);
  const handleHirePlayer = (player) =>{
    const newHire = [...hire, player]
    setHire(newHire);
  }

  useEffect(() => {
    const playerData = [...jsonData];
    setPlayers(playerData);
  }, []);

  return (
    <div>
      <h1>Welcome! Hire and build your Dream team!</h1>
      <h2>Available player to hire : {player.length}</h2>

      <Hire hire={hire}></Hire>

      <div className="player-container">
        {
          player.map(player => <Player key={player.id} player={player} handleHirePlayer={handleHirePlayer}></Player>)
        }
      </div>
      <p className= "right">All right reserved by Jahid Joni</p>
    </div>
  );
}

export default App;
