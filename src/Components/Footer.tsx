import "../styles/footer.css";

function Footer() {
  const footerTags = [
    "About",
    "Help",
    "Press",
    "Api",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta verified",
  ];
  return (
    <div className="footer">
      <div className="footer-links">
        {footerTags.map((tag, index) => {
          return (
            <div className="links-tags" key={index}>
              <a href="https://#">
                <span>{tag}</span>
              </a>
              <span className="dot"></span>
            </div>
          );
        })}
      </div>
      <span>© 2024 Instagram from AchiGel</span>
    </div>
  );
}

export default Footer;
