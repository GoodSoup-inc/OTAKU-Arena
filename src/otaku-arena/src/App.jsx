import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./component/Navbar";
import CharBoxes from "./pageTwo/actionPage";
import Bodyintro from "./component/Bodyintro";
import StartButton from "./component/Start";

/////////////////////////////////////////////
function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <Bodyintro />
      <br></br>
      <StartButton />
      <br></br>
    </>
  );
}
//////////////////////////////////////////////////
export default App;
