import "../styles/navBarItems.css";

function NavBarItems(props: any) {
  return (
    <div className="nav-bar-items">
      <img src={props.icon} alt="icon" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default NavBarItems;
