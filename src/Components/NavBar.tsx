import NavBarItems from "./NavBarItems";
import homeIcon from "../images/home.png";
import searchIcon from "../images/search.png";
import exploreIcon from "../images/explore-icon-512x512-znt7vcm6.png";
import reelsIcon from "../images/reels-icon.png";
import messagesIcon from "../images/messenger-icon-2048x2046-v03kqn4a.png";
import notificationsIcon from "../images/heart.png";
import createIcon from "../images/create.png";

function NavBar() {
  const navbarItems = [
    { icon: homeIcon, title: "Home" },
    { icon: searchIcon, title: "Search" },
    { icon: exploreIcon, title: "Explore" },
    { icon: reelsIcon, title: "Reels" },
    { icon: messagesIcon, title: "Messages" },
    { icon: notificationsIcon, title: "Notifications" },
    { icon: createIcon, title: "Create" },
  ];
  return (
    <div className="navbar-items">
      {navbarItems.map((item, index) => (
        <NavBarItems key={index} icon={item.icon} title={item.title} />
      ))}
    </div>
  );
}

export default NavBar;
