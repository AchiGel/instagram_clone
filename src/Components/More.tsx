import burger from "../images/burger.png";
import "../styles/more.css";

function More() {
  return (
    <div className="more">
      <img src={burger} alt="burger icon" />
      <h3>More</h3>
    </div>
  );
}

export default More;
