import { useRef } from "react";
import "./header.css";

function Header({ setCurrentTab }) {
  const buttonRef = useRef();
  const clickHandler = (e) => {
    setCurrentTab(e.target.textContent.toLowerCase());
    console.log(e.target);
  };
  return (
    <div className="header">
      <button onClick={clickHandler} ref={buttonRef}>
        Profile
      </button>
      <button onClick={clickHandler} ref={buttonRef}>
        Interests
      </button>
      <button onClick={clickHandler} ref={buttonRef}>
        Settings
      </button>
    </div>
  );
}

export default Header;
