import MainAside from "./MainAside";
import MainBody from "./MainBody";
import "../styles/main.css";
import { useEffect, useState } from "react";

function Main(props: any) {
  const [contentArray, setContentArray] = useState<string[]>([]);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=20"
      );
      const data = await response.json();
      const links = data.map((item: any) => item.download_url);
      setContentArray(links);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  return (
    <main className="main">
      {!props.exploreClicked ? (
        <>
          <MainBody />
          <MainAside />
        </>
      ) : (
        <section className="main-section-grid">
          {contentArray.map((content, index) => (
            <img key={index} src={content} alt="photoNum" />
          ))}
        </section>
      )}
    </main>
  );
}

export default Main;
