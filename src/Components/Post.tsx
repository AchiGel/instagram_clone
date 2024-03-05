import "../styles/post.css";
import AsideProfile from "./AsideProfile";
import heart from "../images/heart.png";
import chat from "../images/chat.png";
import send from "../images/send.png";
import save from "../images/save-instagram.png";
import dots from "../images/dots.png";
import emoji from "../images/happiness.png";

function Post(props: any) {
  return (
    <div className="post">
      <div className="post-profile">
        <AsideProfile />
        <img className="post-profile-dots" src={dots} alt="dots" />
      </div>

      <div className="post-content">
        <img src={props.imgSrc} alt="postContent" />
      </div>
      <div className="post-options">
        <div className="post-options-left">
          <img src={heart} alt="heart" />
          <img src={chat} alt="chat" />
          <img src={send} alt="send" />
        </div>
        <div className="post-options-right">
          <img src={save} alt="save" />
        </div>
      </div>
      <div className="post-likes">
        <span>
          <span>24</span> Likes
        </span>
      </div>
      <div className="post-comments">
        <textarea placeholder="Add a comment..." />
        <img src={emoji} alt="emoji" />
      </div>
    </div>
  );
}

export default Post;
