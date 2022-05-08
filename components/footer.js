import React from "react";
import IconPhone from "./icons/icon-phone";
import IconEmail from "./icons/icon-email";
import Image from "next/image";
import IconLocation from "./icons/icon-location";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="grid-row">
          <div className="col-md-4">
            {/* <div className="logo-container">
              <Logo className={"logo-svg"} />
            </div> */}
            <h2 className="title">Contact Us</h2>
            <ul className="address-details">
              <li>
                <span className="icon-btn label">
                  <IconLocation />
                </span>
                <span className="value">
                  <span>Dylan's Cafe Bar & Restaurant</span>
                  <span>56 Chatham High Street Kent ME4 4DS</span>
                </span>
              </li>

              <li>
                <span className="icon-btn label">
                  <IconPhone />
                </span>
                <span className="value">
                  <a href="tel:01634817772" className={"link"}>
                    01634817772
                  </a>
                </span>
              </li>

              <li>
                <span className="icon-btn label">
                  <IconEmail />
                </span>
                <span className="value">
                  <a
                    href="mailto:dylanschatham@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    dylanschatham@gmail.com
                  </a>
                  <a
                    href="mailto:medwaychefs@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    medwaychefs@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="media-image">
              <Image src={"/test.png"} layout="fill" alt="footer image" />
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="title">Opening Hours</h2>
            <span className="opening-hours">
              Monday to Saturday 8am to 10pm <br />
              (3pm to 5pm closed)
            </span>
          </div>
        </div>
      </div>

      <div className="base-footer">
        <div>Copyright © {currentYear} Dylan's Cafe</div>
        <span className="hide-sm">|</span>
        <div>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
