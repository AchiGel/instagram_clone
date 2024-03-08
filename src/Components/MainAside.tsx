import "../styles/mainAside.css";
import AsideProfile from "./AsideProfile";
import Footer from "./Footer";
import SuggestedProfiles from "./SuggestedProfiles";
import profileImage from "../images/profileImg.jpg";

function MainAside() {
  return (
    <aside className="main-aside">
      <AsideProfile
        profileImg={profileImage}
        name={"Achi Gelashvili"}
        subName={"AchiGelashvili"}
        switch={<button>Switch</button>}
      />
      <SuggestedProfiles />
      <Footer />
    </aside>
  );
}

export default MainAside;
