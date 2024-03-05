import "../styles/asideProfile.css";
import profileImg from "../images/profileImg.jpg";

function AsideProfile(props: any) {
  return (
    <div className="aside-profile">
      <div className="aside-profile-info">
        <img src={profileImg} alt="profile" />
        <div className="aside-profile-info-names">
          <h3>achigelashvili</h3>
          <span>Achi Gelashvili</span>
        </div>
      </div>
      {props.switch}
      {props.follow}
    </div>
  );
}

export default AsideProfile;
