import "../styles/asideProfile.css";

function AsideProfile(props: any) {
  return (
    <div className="aside-profile">
      <div className="aside-profile-info">
        <img src={props.profileImg} alt="profile" />
        <div className="aside-profile-info-names">
          <h3>{props.name}</h3>
          <span>{props.subName}</span>
        </div>
      </div>
      {props.switch}
      {props.follow}
    </div>
  );
}

export default AsideProfile;
