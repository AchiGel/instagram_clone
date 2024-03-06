import "../styles/App.css";
import Navigation from "./Navigation";
import Main from "./Main";
import "../styles/responsive.css";
import { useState } from "react";

function App() {
  const [exploreClicked, setExploreClicked] = useState(false);
  return (
    <div className="App">
      <Navigation
        exploreLogoClicked={() => setExploreClicked(!exploreClicked)}
      />
      <Main exploreClicked={exploreClicked} />
    </div>
  );
}

export default App;
