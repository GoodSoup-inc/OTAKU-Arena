import fetchData from "../fetch/fetchData";
import { useState } from "react";
///////////////////////////////////////////////
// api url

function getRandomInt() {
  return Math.floor(Math.random() * 44074);
}

// const mcApiUrl = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
////////////////////////////////////////////////////
// char Vs char boxes
const CharBoxes = () => {
  //////////////////////////////////////////////
  const [error, setError] = useState("");
  const [mc, setMc] = useState(null);
  const [mcRight, setRight] = useState(null);
  /////////////////////////////////////////////////
  const clickLeft = async () => {
    const url = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
    const [data, error] = await fetchData(url);
    if (data) setMc(data);
    if (error) setError(error);
    // change the pic in right box
  };
  //
  const clickRight = async () => {
    let url = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
    const [data, error] = await fetchData(url);
    if (data) setRight(data);
    if (error) setError(error);
    // change the pic in the left box
  };
  // vs pic

  ////////////////////////////
  return (
    <>
      <div id="charBoxes">
        <div id="picOne" onClick={clickLeft}>
          {/* <img src={data.images.jpg.image - url} alt="" /> */}
          {mc ? (
            <img src={mc.image?.jpg?.image_url} alt="character"></img>
          ) : (
            "click to load"
          )}
        </div>
        {/* <div>VS</div> */}
        <div id="vsPic">
          <img alt="vsPic" src="./vsPicTwo.jpg"></img>
        </div>

        <div id="picTwo" onClick={clickRight}>
          {mcRight ? (
            <img src={mcRight.image?.jpg?.image_url} alt="character"></img>
          ) : (
            "click to load"
          )}
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

//////////////////////////////////////////////////
export default CharBoxes;
