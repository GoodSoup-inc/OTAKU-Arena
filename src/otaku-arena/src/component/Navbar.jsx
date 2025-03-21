import noodle from "../public/noodle.jpeg";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand-name">
          <Link to={"/"}>
            <img src={noodle} alt="Logo" id="logo" />
          </Link>
        </div>
        <div id="rules-button">
          <button>Rules</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
