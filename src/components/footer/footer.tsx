import "./footer.scss";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-text">
          designed and crafted myself. ai use: image generation and editing.
        </div>
        <div className="footer-link">
          <Link href="/">home</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
