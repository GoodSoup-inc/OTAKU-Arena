import fetchData from '../fetch/fetchData';
import { useState } from 'react';

import NavBar from '../component/Navbar';

// Function to get a random character ID
function getRandomInt() {
  return Math.floor(Math.random() * 22037);
}

// Character VS Character Component
const CharBoxes = () => {
  const [error, setError] = useState('');
  const [mc, setMc] = useState(null);
  const [mcRight, setRight] = useState(null);

  // Fetch character for the left box
  const clickLeft = async () => {
    const url = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
    const [data, fetchError] = await fetchData(url);

    if (data) {
      setMc(data); // Update state
    }
    if (fetchError) {
      setError(fetchError);
    }
  };

  // Fetch character for the right box
  const clickRight = async () => {
    const url = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
    const [data, fetchError] = await fetchData(url);

    if (data) {
      setRight(data); // Update state
    }
    if (fetchError) {
      setError(fetchError);
    }
  };

  return (
    <>
      <NavBar />
      <div id="charBoxes">
        <div id="picOne" onClick={clickLeft}>
          {/* Use optional chaining to avoid errors */}
          {mc ? (
            <img src={mc.data?.images?.jpg?.image_url} alt="character" />
          ) : (
            'Click to load'
          )}
        </div>

        <div id="vsPic">
          <img alt="vsPic" src="./vsPicTwo.jpg" />
        </div>

        <div id="picTwo" onClick={clickRight}>
          {/* Use optional chaining to avoid errors */}
          {mcRight ? (
            <img src={mcRight.data?.images?.jpg?.image_url} alt="character" />
          ) : (
            'Click to load'
          )}
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default CharBoxes;
