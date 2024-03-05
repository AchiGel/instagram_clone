import "../styles/navBarItems.css";

function NavBarItems(props: any) {
  return (
    <button
      onClick={props.handleSearch}
      className="nav-bar-items navbar-button"
    >
      <img src={props.icon} alt="icon" />
      <h3>{props.title}</h3>
    </button>
  );
}

export default NavBarItems;
