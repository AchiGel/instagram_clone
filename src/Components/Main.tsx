import MainAside from "./MainAside";
import MainBody from "./MainBody";
import "../styles/main.css";

function Main() {
  return (
    <main className="main">
      <MainBody />
      <MainAside />
    </main>
  );
}

export default Main;
