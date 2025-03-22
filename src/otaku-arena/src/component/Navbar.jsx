import noodle from '../../public/noodle.jpeg';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const NavBar = () => {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className="navbar">
        <div className="brand-name">
          <Link to={'/'}>
            <img src={noodle} alt="Logo" id="logo" />
          </Link>
        </div>
        <div id="rules-button">
          <button onClick={openModal}>Rules</button>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={dialogRef} className="rules-modal">
        <h2>Game Rules</h2>
        <p>1. Click start to the start the game</p>
        <p>
          2. Select the anime characters that you believe would win the fight
          `(there are only 5 rounds)`
        </p>
        <p>3. At the last round, enjoy the information about your winner</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
};

export default NavBar;
