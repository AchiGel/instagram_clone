import { useEffect, useState } from "react";
import "../styles/mainBody.css";
import Post from "./Post";

function MainBody() {
  const [postContent, setPostContent] = useState<string[]>([]);
  const [userName, setUserName] = useState<string[]>([]);
  const [userSubName, setUserSubName] = useState<string[]>([]);
  const [userProfileImg, setUserProfileImg] = useState<string[]>([]);

  useEffect(() => {
    fetchingImages();
    fetchUserName();
    fetchUserProfile();
  }, []);

  async function fetchingImages() {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    const links = data.map(
      (link: { download_url: string }) => link.download_url
    );
    setPostContent(links);
  }

  async function fetchUserName() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const names = [];
    const subNames = [];
    for (let i = 0; i < data.length; i++) {
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
    for (let i = 0; i < data.length; i++) {
      links.push(data[i].download_url);
    }
    setUserProfileImg(links);
  }

  return (
    <section className="main-body">
      {postContent.map((item, index) => {
        return (
          <Post
            userName={userName[index]}
            userSubName={userSubName[index]}
            userProfileImg={userProfileImg[index]}
            key={index}
            imgSrc={item}
          />
        );
      })}
    </section>
  );
}

export default MainBody;
