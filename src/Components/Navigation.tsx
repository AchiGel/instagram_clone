import NavBar from "./NavBar";
import logo from "../images/Instagram_logo.svg.png";
import "../styles/navigation.css";
import More from "./More";
import Profile from "./Profile";
import insta from "../images/instagram.png";
import { useState } from "react";

function Navigation() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={!isClicked ? "navigation" : "navigation-hiden"}>
      <div className="container">
        {!isClicked ? (
          <img className="navigation-logo" src={logo} alt="instagram logo" />
        ) : (
          <img
            className="navigation-logo-responsive navigation-logo-responsive-show"
            src={insta}
            alt="instagram logo"
          />
        )}

        <NavBar logoClicked={() => setIsClicked(!isClicked)} />
        <Profile isClicked={isClicked} />
        <More isClicked={isClicked} />
      </div>
    </div>
  );
}

export default Navigation;
