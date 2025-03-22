import fetchData from "../fetch/fetchData";
import { useEffect, useState } from "react";
import { useRef } from "react";
import NavBar from "../component/Navbar";

// Function to get a random character ID
function getRandomInt() {
  return Math.floor(Math.random() * 32037);
}

// Character VS Character Component
const CharBoxes = () => {
  const [error, setError] = useState("");
  const [mc, setMc] = useState(null);
  const [mcRight, setRight] = useState(null);
  const [winner, setWinner] = useState(null);
  const [counter, setCounter] = useState(0);
  const randomUrl = "https://api.jikan.moe/v4/random/characters";

  useEffect(() => {
    const doFetch = async () => {
      const [data1, fetchError1] = await fetchData(randomUrl);
      const [data2, fetchError2] = await fetchData(randomUrl);
      setRight(data1);
      setMc(data2);
      // console.log(data1);
    };
    doFetch();
  }, []);
  // Fetch character for the left box
  const clickLeft = async () => {
    if (counter < 5) {
      // const randomUrl = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
      setWinner(mc);
      setCounter(counter + 1);

      const [data, fetchError] = await fetchData(randomUrl);
      if (data) {
        setRight(data); // Update state
      }
      if (fetchError) {
        setError(fetchError);
      }
    }
  };

  // Fetch character for the right box
  const clickRight = async () => {
    if (counter < 5) {
      // const randomUrl = `https://api.jikan.moe/v4/characters/${getRandomInt()}`;
      setCounter(counter + 1);
      setWinner(mcRight);
      const [data, fetchError] = await fetchData(randomUrl);
      if (data) {
        setMc(data); // Update state
      }
      if (fetchError) {
        setError(fetchError);
      }
    }
  };
  /////////////
  // modal
  const dialogRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    dialogRef.current?.showModal();
  };

  const close = () => {
    dialogRef.current?.close();
  };
  useEffect(() => {
    if (counter === 5) {
      console.log(winner);
      open();
    }
  }, [counter]);

  ///////////////////////////////////////////////////////////
  return (
    <>
      <NavBar />
      {/* <ClickLimiter maxClicks={5}> */}
      <div id="charBoxes">
        <h1>{counter}</h1>
        <div id="picOne" onClick={clickLeft} className="container">
          {/* Use optional chaining to avoid errors */}
          {mc ? (
            <img
              src={mc.data?.images?.jpg?.image_url}
              alt="character"
              className="picture"
            />
          ) : (
            "Click to load"
          )}
        </div>

        <div id="vsPic">
          <img alt="vsPic" src="./vsPicTwo.jpg" />
        </div>

        <div id="picTwo" onClick={clickRight} className="container">
          {/* Use optional chaining to avoid errors */}
          {mcRight ? (
            <img
              src={mcRight.data?.images?.jpg?.image_url}
              alt="character"
              className="picture"
            />
          ) : (
            "Click to load"
          )}
        </div>
        <div id="modal">
          <dialog ref={dialogRef}>
            <p>{winner ? winner.data.name : "name"}</p>
            <p></p>
            <button autoFocus onClick={close}>
              Close
            </button>
          </dialog>
        </div>
      </div>
      {/* </ClickLimiter> */}
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </>
  );
};

export default CharBoxes;
