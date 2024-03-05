import "../styles/suggestedProfiles.css";
import AsideProfile from "./AsideProfile";

function SuggestedProfiles() {
  return (
    <div className="suggested-profiles">
      <div className="suggested-profiles-header">
        <h2>Suggested for you</h2>
        <button>See All</button>
      </div>
      <div className="suggested-profiles-cards">
        <AsideProfile />
        <AsideProfile />
        <AsideProfile />
        <AsideProfile />
        <AsideProfile />
      </div>
    </div>
  );
}

export default SuggestedProfiles;
