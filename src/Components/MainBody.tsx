import { useEffect, useState } from "react";
import "../styles/mainBody.css";
import Post from "./Post";

function MainBody() {
  const [postContent, setPostContent] = useState<string[]>([]);

  useEffect(() => {
    fetchingImages();
  }, []);

  async function fetchingImages() {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    const links = data.map(
      (link: { download_url: string }) => link.download_url
    );
    setPostContent(links);
  }

  return (
    <section className="main-body">
      {postContent.map((item, index) => {
        return <Post key={index} imgSrc={item} />;
      })}
    </section>
  );
}

export default MainBody;
