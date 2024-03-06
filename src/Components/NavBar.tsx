import NavBarItems from "./NavBarItems";
import homeIcon from "../images/home.png";
import searchIcon from "../images/search.png";
import exploreIcon from "../images/explore-icon-512x512-znt7vcm6.png";
import reelsIcon from "../images/reels-icon.png";
import messagesIcon from "../images/messenger-icon-2048x2046-v03kqn4a.png";
import notificationsIcon from "../images/heart.png";
import createIcon from "../images/create.png";
import "../styles/navBar.css";

import { useState } from "react";

function NavBar(props: any) {
  const [navBarItems, setNavBarItems] = useState([
    { icon: homeIcon, title: "Home", clicked: false },
    { icon: searchIcon, title: "Search", clicked: false },
    { icon: exploreIcon, title: "Explore", clicked: false },
    { icon: reelsIcon, title: "Reels", clicked: false },
    { icon: messagesIcon, title: "Messages", clicked: false },
    { icon: notificationsIcon, title: "Notifications", clicked: false },
    { icon: createIcon, title: "Create", clicked: false },
  ]);

  function handleSearch(index: number) {
    setNavBarItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, clicked: !item.clicked } : item
      )
    );
  }

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="navbar-items">
      {navBarItems[1].clicked ? (
        <div className="search-bar">
          <div className="search-bar-top">
            <h2>Search</h2>
            <input type="text" placeholder="Search" />
          </div>
          <div className="search-bar-bottom">
            <h4>Recent</h4>
            <div className="search-result">
              <span>No Recent Searches.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="search-bar-hidden">false</div>
      )}
      {navBarItems.map((item, index) => (
        <NavBarItems
          handleSearch={() => {
            handleSearch(index);
            setIsClicked(!isClicked);
            props.logoClicked();
          }}
          key={index}
          icon={item.icon}
          title={item.title}
          className={!isClicked ? "nav-bar-title" : "nav-bar-title-hiden"}
        />
      ))}
    </div>
  );
}

export default NavBar;
