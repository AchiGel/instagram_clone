import burger from "../images/menu-burger.png";
import "../styles/more.css";

function More(props: any) {
  return (
    <div className="more">
      <img src={burger} alt="burger icon" />
      <h3 className={props.isClicked ? "text-hiden" : "text-visible"}>More</h3>
    </div>
  );
}

export default More;
