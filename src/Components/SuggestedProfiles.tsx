import { useEffect, useState } from "react";
import "../styles/suggestedProfiles.css";
import AsideProfile from "./AsideProfile";

function SuggestedProfiles() {
  const [userName, setUserName] = useState<string[]>([]);
  const [userSubName, setUserSubName] = useState<string[]>([]);
  const [userProfileImg, setUserProfileImg] = useState<string[]>([]);

  useEffect(() => {
    fetchUserName();
    fetchUserProfile();
  }, []);

  async function fetchUserName() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const names = [];
    const subNames = [];
    for (let i = 0; i < 5; i++) {
      names.push(data[i].name);
      subNames.push(data[i].username);
    }
    setUserName(names);
    setUserSubName(subNames);
  }

  async function fetchUserProfile() {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const data = await response.json();
    const links = [];
    for (let i = 0; i < 5; i++) {
      links.push(data[i].download_url);
    }
    setUserProfileImg(links);
  }

  return (
    <div className="suggested-profiles">
      <div className="suggested-profiles-header">
        <h2>Suggested for you</h2>
        <button>See All</button>
      </div>
      <div className="suggested-profiles-cards">
        <AsideProfile
          name={userName[0]}
          subName={userSubName[0]}
          profileImg={userProfileImg[0]}
          follow={<button>Follow</button>}
        />
        <AsideProfile
          name={userName[1]}
          subName={userSubName[1]}
          profileImg={userProfileImg[1]}
          follow={<button>Follow</button>}
        />
        <AsideProfile
          name={userName[2]}
          subName={userSubName[2]}
          profileImg={userProfileImg[2]}
          follow={<button>Follow</button>}
        />
        <AsideProfile
          name={userName[3]}
          subName={userSubName[3]}
          profileImg={userProfileImg[3]}
          follow={<button>Follow</button>}
        />
        <AsideProfile
          name={userName[4]}
          subName={userSubName[4]}
          profileImg={userProfileImg[4]}
          follow={<button>Follow</button>}
        />
      </div>
    </div>
  );
}

export default SuggestedProfiles;
