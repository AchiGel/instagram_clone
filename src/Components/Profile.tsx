import "../styles/profile.css";
import profileImg from "../images/profileImg.jpg";

function Profile(props: any) {
  return (
    <div className="profile">
      <img src={profileImg} alt="profileImage" />
      <h3 className={!props.isClicked ? "visible-text" : "hiden-text"}>
        Profile
      </h3>
    </div>
  );
}

export default Profile;
