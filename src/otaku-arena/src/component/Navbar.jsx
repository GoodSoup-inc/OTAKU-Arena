import noodle from "../public/noodle.jpeg";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand-name">
          <img src={noodle} alt="" id="logo" />
        </div>
        <div id="rules-button">
          <button>Rules</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
