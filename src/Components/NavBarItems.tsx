import "../styles/navBarItems.css";

function NavBarItems(props: any) {
  return (
    <button
      onClick={(e) => {
        if (e.currentTarget.textContent === "Search") {
          props.handleSearch();
        } else if (e.currentTarget.textContent === "Explore") {
          props.handleExplore();
        } else {
          return;
        }
      }}
      className="nav-bar-items navbar-button"
    >
      <img src={props.icon} alt="icon" />
      <h3 className={props.className}>{props.title}</h3>
    </button>
  );
}

export default NavBarItems;
