import NavBar from "./NavBar";
import logo from "../images/Instagram_logo.svg.png";
import "../styles/navigation.css";
import More from "./More";
import Profile from "./Profile";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="navigation-logo" src={logo} alt="instagram logo" />
        <NavBar />
        <Profile />
        <More />
      </div>
    </div>
  );
}

export default Navigation;
