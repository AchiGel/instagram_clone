import "../styles/profile.css";
import profileImg from "../images/profileImg.jpg";

function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} alt="profileImage" />
      <h3>Profile</h3>
    </div>
  );
}

export default Profile;
