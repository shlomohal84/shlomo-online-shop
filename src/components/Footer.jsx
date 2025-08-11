export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img alt="logo" src="icons/troll_meme.png" />
        </div>

        <div className="footer-links-container">
          <div className="footer-link-wrapper">
            <a target="_blank" href="https://github.com/shlomohal84?tab=repositories">
              Github Page
            </a>
            <a target="_blank" href="#">
              Something
            </a>
            <a target="_blank" href="#">
              Something
            </a>
            <a target="_blank" href="#">
              Something
            </a>
            <a target="_blank" href="#">
              Dark Side
            </a>
          </div>
        </div>
        <div className="footer-social-media-icons-container">
          <img src="/icons/social_media/facebook.svg" alt="facebook" className="footer-social-media-icon" />
          <a target="_blank" href="https://github.com/shlomohal84?tab=repositories">
            <img src="icons/social_media/github.svg" alt="Github" className="footer-social-media-icon" />
          </a>
          <img src="/icons/social_media/twitter.svg" alt="twitter" className="footer-social-media-icon" />
          <img src="/icons/social_media/steam.svg" alt="steam" className="footer-social-media-icon" />
          <img src="/icons/social_media/whatsapp.svg" alt="whatsapp" className="footer-social-media-icon" />
        </div>
        <div className="footer-copyrights-container">
          <h5> Copyright Bullshit</h5>
        </div>
      </div>
    </>
  );
}
