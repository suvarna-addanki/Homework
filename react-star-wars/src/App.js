import starwars from './services/sw-api'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ships, setShips] = useState([])
  useEffect(() => {
    starwars()
      .then(res => res.json())
      .then((res) => setShips(res.results))
  }, [])
  // console.log(ships)

  return (
    <div id='app'>
      <h1>StarwarShips </h1>
      <ul id='ul'>
        {ships.map((ship) => (
          <li id='li'>
            <div id='name'>
              <h3>{ship.name}</h3>
              <br />
            </div>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
