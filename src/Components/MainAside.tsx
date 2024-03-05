import "../styles/mainAside.css";
import AsideProfile from "./AsideProfile";
import Footer from "./Footer";
import SuggestedProfiles from "./SuggestedProfiles";

function MainAside() {
  return (
    <aside className="main-aside">
      <AsideProfile />
      <SuggestedProfiles />
      <Footer />
    </aside>
  );
}

export default MainAside;
