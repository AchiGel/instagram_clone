import NavBarItems from "./NavBarItems";
import homeIcon from "../images/home-icon.png";
import searchIcon from "../images/searchIcon.png";
import exploreIcon from "../images/explore-icon-512x512-znt7vcm6.png";
import reelsIcon from "../images/reels-icon.png";
import messagesIcon from "../images/messenger-icon-2048x2046-v03kqn4a.png";
import notificationsIcon from "../images/heart-instagram-like-notification-icon-transparent-png-1825360.png";
import createIcon from "../images/new_create_ui_ux_plus_add_icon_224699.png";

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
