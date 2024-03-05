import "../styles/mainBody.css";
import Post from "./Post";

function MainBody() {
  const postContent = [
    { postImage: "https://picsum.photos/470/700" },
    { postImage: "https://picsum.photos/470/700" },
    { postImage: "https://picsum.photos/470/700" },
    { postImage: "https://picsum.photos/470/700" },
    { postImage: "https://picsum.photos/470/700" },
    { postImage: "https://picsum.photos/470/700" },
  ];

  return (
    <section className="main-body">
      {postContent.map((item, index) => {
        return <Post key={index} imgSrc={item.postImage} />;
      })}
    </section>
  );
}

export default MainBody;
