import React from "react";
import "./Footer.css";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  MapPin,
  Phone,
  Envelope,
} from "phosphor-react";
const Footer = () => {
  return (
    <footer className="py-10 mt-auto">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931036/Fast-Food/logo_footer_tzotvk.png"
              alt="logo"
            />
          </div>
          <ul className="flex items-center flex-col lg:flex-row text-gray-50 font-bold text-sm gap-3">
            <li className="flex items-center gap-2">
              <span>
                <MapPin size={20} color="#ffcc00" weight="fill" />
              </span>
              422, 14TH STREET,
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Phone size={20} color="#ffcc00" weight="fill" />
              </span>
              NY 111-222-333,
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <Envelope size={20} color="#ffcc00" weight="fill" />
              </span>
              INFO@EXAMPLE.COM
            </li>
          </ul>
          <ul className="flex items-center justify-between gap-3">
            <li>
              <FacebookLogo size={32} color="#ffffff" />
            </li>
            <li>
              <TwitterLogo size={32} color="#ffffff" />
            </li>
            <li>
              <InstagramLogo size={32} color="#ffffff" />
            </li>
            <li>
              <YoutubeLogo size={32} color="#ffffff" />
            </li>
          </ul>
          <p className="text-sm text-gray-50">
            Copyright © WP Academy, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
