import MainAside from "./MainAside";
import MainBody from "./MainBody";
import "../styles/main.css";

function Main(props: any) {
  const contentArray = [
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
  ];
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
